
export class Visual_UmarB_SDK {
    settings;
    code_UmarB;
    constructor(settings) {
        this.settings = settings;
    }
    createBtn() {
        let rootElm = document.getElementById(this.settings.CheckBalanceBtnAreaId);
        console.log("rootElm", rootElm)
        if (rootElm) {
            console.log("here come pain")
            let balBtn = document.createElement('button');
            balBtn.innerHTML = 'Check Balance (UmarB)'
            rootElm.appendChild(balBtn);
            return balBtn;
        } else {
            console.warn("checkBalanceBtnAreaId element not found");
            return null;
        }
    }
    createLoginForm() {
        try {
            let iframe = document.createElement('iframe');
            iframe.src = '/createForm_3.html';
            let rootElm = document.getElementById(this.settings.FormLoadAreaId);
            iframe.width = "325px";
            iframe.height = "480px";
            // rootElm.width = "350px";
            // rootElm.height = "500px";
            console.log("rootElm", rootElm)
            if (rootElm) {
                rootElm.appendChild(iframe);
                return iframe;
            } else {
                console.warn("FormLoadAreaId element not found");
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    CreateResgister() {

    }
    AskPremistionDepit() {

    }
    getLoginData() {

    }
    getResgisterData() {

    }

    afferSubimtEvent(eventName, data) {
        //eventName=Resgister|Login|Logout
    }

}