import { Code_UmarB } from "./code.UmarB.js";

export class Visual_UmarB_SDK {
    settings;
    code_UmarB;
    rootElm;
    constructor(settings) {
        this.settings = settings;
        this.code_UmarB = new Code_UmarB();
        this.rootElm = document.getElementById(this.settings.FormLoadAreaId);
    }
    createBtn() {
        this.rootElm = document.getElementById(this.settings.CheckBalanceBtnAreaId);
        console.log("rootElm", this.rootElm)
        if (this.rootElm) {
            console.log("here come pain")
            let balBtn = document.createElement('button');
            balBtn.innerHTML = 'Check Balance (UmarB)'
            this.rootElm.appendChild(balBtn);
            return balBtn;
        } else {
            console.warn("checkBalanceBtnAreaId element not found");
            return null;
        }
    }
    addCss() {
        if (this.rootElm) {
            let css = document.createElement('link');
            css.href = "/styles.css"
            css.rel = "stylesheet";
            this.rootElm.append(css);
        }
    }
    createLoginForm() {
        try {
            let iframe = document.createElement('div');
            iframe.style.width = "325px";
            iframe.style.height = "500px";
            iframe.style.border = "none";
            // rootElm.width = "350px";
            // rootElm.height = "500px";
            if (this.rootElm) {
                this.code_UmarB.getLocalFile('/createForm_3.html', iframe);
                this.addCss();
                this.rootElm.appendChild(iframe);
                setTimeout(function () {
                    console.log("yes", this.rootElm.querySelector('input'))
                }.bind(this), 6000)
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