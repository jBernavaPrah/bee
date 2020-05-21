import Bee from "@mailupinc/bee-plugin";

export function saveFile(body, filename) {
    const element = document.createElement("a");
    const file = new Blob([body]);
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}


export const beePluginConfig = {
    uid: 'myuser',
    container: 'beePluginContainer',
    language: 'en-US',
    onSave: (jsonFile, htmlFile) => {
        console.log('onSave', jsonFile, htmlFile)
    },
    onSaveAsTemplate: (jsonFile) => {
        console.log('onSaveAsTemplate', jsonFile)
    },
    onSend: (htmlFile) => {
        console.log('onSend', htmlFile)
    },
    onError: (errorMessage) => {
        console.log('onError ', errorMessage)
    }
};

export const baseTemplate = {
    "page": {
        "rows": [],
        "description": "",
        "title": "",
        "template": {
            "name": "template-base",
            "type": "basic",
            "version": "2.0.0"
        },
        "body": {
            "webFonts": [],
            "container": {
                "style": {
                    "background-color": "#FFFFFF"
                }
            },
            "content": {
                "computedStyle": {
                    "messageWidth": "500px",
                    "messageBackgroundColor": "transparent",
                    "linkColor": "#7c4b96"
                },
                "style": {
                    "color": "#000000",
                    "font-family": "Arial, 'Helvetica Neue', Helvetica, sans-serif"
                }
            },
            "type": "mailup-bee-page-properties"
        }
    }
};

export const beePlugin = new Bee();