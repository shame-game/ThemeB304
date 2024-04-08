const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);


fetchSheet
    .fetch({
        gSheetId: '1-sMSAdQCXQrHk8Hd3llbOxoyz3r_tZH9OUC_qllvVlc',
        wSheetName: 'Template',
    })
    .then((rows) => {
        let items = ''
        rows.forEach((t) => {
            items +=
                `<div class="list1412a1-box col-lg-6">
                    <img class="list1412a1-img" src="${t['Img']}">
                        <div style="width: 95%;margin: 0 auto;">
                            <p>${t['Tiltle']}</p>
                        </div>
                        <div class="list1412a1-posi">
                            <a target="_blank" href="${t['Link']}">Live preview</a>
                        </div>
                </div>`
        })
        vam('#loadcontent_lding').innerHTML = items;
    });