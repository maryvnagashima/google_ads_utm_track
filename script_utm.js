function main() {
Logger.log("Processing account: " + AdsApp.currentAccount().getCustomerId());

// Process each campaign type
tryHandleCampaigns(AdsApp.campaigns().get(), "Standard & Others");
tryHandleCampaigns(AdsApp.shoppingCampaigns().get(), "Shopping");
tryHandleCampaigns(AdsApp.performanceMaxCampaigns().get(), "Performance Max");
tryHandleCampaigns(AdsApp.videoCampaigns().get(), "Video");

Logger.log("Processing completed for account: " + AdsApp.currentAccount().getCustomerId());
}

function tryHandleCampaigns(campaigns, campaignType) {
for (var i = 0; i < campaigns.length; i++) {
var campaign = campaigns[i];

// Get final URL of the campaign
var urls = campaign.urls();
var finalUrl = urls.getFinalUrl();

// Ensure the URL exists and does not already contain UTM parameters
if (finalUrl && finalUrl.indexOf('utm_') === -1) {
// Build UTM parameters
var newUTM = "?utm_source=google&utm_medium=cpc&utm_campaign=" + encodeURIComponent(campaign.getName());

// Set the final URL with the new UTM parameters
urls.setFinalUrl(finalUrl + newUTM);

Logger.log("Updated " + campaignType + " campaign: " + campaign.getName());
} else {
Logger.log("Skipping campaign " + campaign.getName() + " as UTM parameters are already present or URL is empty.");
}
}
}
