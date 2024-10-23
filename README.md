
# ✨ Google Ads UTM Parameter Automation Script

Este script automatiza a adição de parâmetros UTM em campanhas do Google Ads, garantindo que os nomes das campanhas sejam atribuídos corretamente no Google Analytics (GA4). Ele adiciona automaticamente UTMs tanto para campanhas já existentes quanto para futuras, quando programado para rodar regularmente.

# ✅Funcionalidades 
- Adição automática de parâmetros UTM com nomes de campanha.
- Suporte para contas únicas e MCC.
- Ajuda a evitar erros manuais ao configurar UTMs.
- Nota: Não altera campanhas de vídeo, pois só lê o modelo de acompanhamento.

# ✅ Descrição do Projeto
Este projeto automatiza a adição de parâmetros UTM nas campanhas do Google Ads, utilizando um modelo de rastreamento. Ele oferece uma medição básica no nível da campanha, sem necessidade de parâmetros personalizados avançados. No entanto, você pode facilmente estender as funcionalidades do script conforme suas necessidades, como adicionar atividades específicas ou aplicar em campanhas pausadas.

# ✅ Funcionalidades Principais
- Automação de UTM: Adiciona parâmetros UTM às campanhas de Pesquisa, Display, Shopping e Performance Max (pMax).
- Execução Regular: O script foi configurado para rodar a cada hora, garantindo que todas as campanhas estejam sempre corretamente marcadas, mesmo quando os nomes das campanhas mudarem.
- Personalizável: Você pode ajustar o modelo de rastreamento e adicionar ou modificar parâmetros conforme necessário.

A linha básica de modelo de rastreamento utilizada no script é:
{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={_campaign}&utm_id= + Campaign.getId().

# ✅Parâmetros UTM Utilizados
- utm_source: google
- utm_medium: cpc
- utm_campaign: Nome da Campanha (ex: Campanha BlackFriday)
- utm_id: ID da campanha.

Você pode modificar esses parâmetros conforme sua estratégia de rastreamento, bastando alterar a linha do modelo de rastreamento no script.

# ✅Por que não usamos valueTrack?
Ao contrário do SA360, o Google Ads não suporta valueTrack para capturar diretamente o nome da campanha. Portanto, optamos por uma solução personalizada. Se necessário, você pode substituir os parâmetros pelo CampaignId, sem impacto na funcionalidade geral. Para mais informações sobre os parâmetros valueTrack, consulte a documentação oficial do Google Ads:
Lista de Parâmetros ValueTrack. (https://support.google.com/google-ads/answer/6305348?hl=pt-BR)

# ✅Benefícios
- Suporte para Várias Campanhas: Funciona com campanhas de Pesquisa, Display, Shopping e pMax. No entanto, campanhas de Vídeo e DemandGen não são compatíveis com scripts, sendo necessário configurar os parâmetros UTM manualmente.
- Automação Eficiente: Reduz erros manuais ao aplicar parâmetros UTM automaticamente, mantendo a consistência em todas as suas campanhas.

# ✅Limitações
- Limite de Contas MCC: O script pode gerenciar até 50 contas em uma MCC. Para mais contas, será necessário implementar agrupamentos no script.
- Timeout em Grandes Volumes: Teoricamente, se houver muitas campanhas, o script pode sofrer timeout, mas isso é raro na maioria dos cenários.
- Campanhas de Demand Gen: Essas campanhas não são suportadas pelo script e exigem rastreamento manual.

# 🎲 Configuração e Execução
O script foi desenvolvido para rodar automaticamente a cada hora, garantindo que as mudanças nos parâmetros UTM e nos nomes das campanhas sejam atualizadas regularmente. Se necessário, você pode ajustar a frequência de execução de acordo com as suas necessidades.

