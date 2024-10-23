function main() { 
const accountSelector = AdsManagerApp.accounts().withLimit(50); // Limitar a 50 contas (ajuste conforme necessário)
accountSelector.executeInParallel('processAccount', 'allFinished');
}

function processAccount() {
var account = AdsApp.currentAccount();
Logger.log("Processing account: " + account.getCustomerId());

// Processar cada tipo de campanha com tratamento de erros
tryHandleCampaigns(AdsApp.campaigns(), "Standard & Others");
tryHandleCampaigns(AdsApp.shoppingCampaigns(), "Shopping");
tryHandleCampaigns(AdsApp.performanceMaxCampaigns(), "Performance Max");

// Retornar o ID da conta como resultado
return account.getCustomerId();
}

function tryHandleCampaigns(campaignIteratorFunction, campaignType) {
try {
handleCampaigns(campaignIteratorFunction, campaignType);
} catch (e) {
Logger.log("Error processing " + campaignType + " campaigns: " + e.message);
}
}

function handleCampaigns(campaignIteratorFunction, campaignType) {
var campaignIterator = campaignIteratorFunction
.withCondition('Status != REMOVED') // Apenas campanhas ativas ou pausadas
.get();

while (campaignIterator.hasNext()) {
var campaign = campaignIterator.next();
try {
// Template UTM personalizado para cada tipo de campanha
var trackingTemplate = "{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign=" + encodeURIComponent(campaign.getName()) + "&utm_id=" + campaign.getId();

// Aplicar o tracking template
campaign.urls().setTrackingTemplate(trackingTemplate);

// Definir parâmetros personalizados
campaign.urls().setCustomParameters({
campaign: encodeURIComponent(campaign.getName())
});

Logger.log("Applied UTM tracking to campaign: " + campaign.getName());

} catch (e) {
Logger.log("Error processing campaign " + campaign.getId() + " in " + campaignType + ": " + e.message);
}
}
}

// Função para lidar com os resultados após o processamento de todas as contas
function allFinished(results) {
for (var i = 0; i < results.length; i++) {
var result = results[i];
if (result.getStatus() === 'OK') {
Logger.log("Successfully processed account: " + result.getCustomerId());
} else {
Logger.log("Failed to process account: " + result.getCustomerId() + " with error: " + result.getError());
}
}
}
