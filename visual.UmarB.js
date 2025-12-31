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
    loadPage(page) {
        try {
            let iframe = document.createElement('div');
            iframe.style.width = "325px";
            iframe.style.height = "500px";
            iframe.style.border = "none";
            // rootElm.width = "350px";
            // rootElm.height = "500px";
            if (this.rootElm) {
                this.code_UmarB.getLocalFile(page, iframe);
                this.addCss();
                this.rootElm.innerHTML = '';
                this.addCss();
                this.rootElm.appendChild(iframe);
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
    setEventsLoginPage() {
        setTimeout(function () {
            let btnCreate = this.rootElm.querySelector("#createAccount_UmarB_1");
            btnCreate.addEventListener("click", function () {
                this.loadPage('./createForm_1.html');
                setTimeout(function () {
                    let nextBtCreate2 = this.rootElm.querySelector("#createAccount_UmarB_2");
                    nextBtCreate2.addEventListener("click", function () {
                        this.loadPage('./createForm_2.html');
                    }.bind(this), 1500)
                    //load
                    setTimeout(function () {
                        let nextBtCreate3 = this.rootElm.querySelector("#createAccount_UmarB_3");
                        nextBtCreate3.addEventListener("click", function () {
                            this.loadPage('./createForm_3.html');
                        }.bind(this));
                    }.bind(this), 1500)

                }.bind(this), 1500);

            }.bind(this));

            let forgotBtn = this.rootElm.querySelector("#forgotPassword_UmarB")
            forgotBtn.addEventListener("click", function () {
                this.loadPage('./forgotPasswordForm.html');
                //let elm = this.rootElm.querySelector("#UmarB_login_form");
                //elm.style.display = "none";
            }.bind(this));
        }.bind(this), 2000)

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