import { ApiUrl, ClientID, SecretKey, CheckBalanceBtnAreaId } from "./config.UmarB.js";
import { Visual_UmarB_SDK } from "./visual.UmarB.js";
import { Code_UmarB } from "./code.UmarB.js";

export default class UmarB_SDK {
    /**
    * @param {object} settings
    * @param {string} settings.ClientID UmarB Client Id
    * @param {string} settings.SecretKey UmarB Secret key
    * @param {string} settings.checkBalanceBtnAreaId Give element id for create check your umarab balance
    */;
    settings;
    visualUmarBSDK;
    codeUmarB;
    constructor(settings) {
        console.log("ok3");
        this.settings = settings;
        console.log(this.settings, settings);
        if (!this.settings) {
            //load default config from html file
            this.settings = {
                ClientID: ClientID,
                SecretKey: SecretKey,
                ApiUrl: ApiUrl,
                CheckBalanceBtnAreaId: CheckBalanceBtnAreaId
            };
        }
    }
    init() {
        this.codeUmarB = new Code_UmarB(this.settings);
        this.visualUmarBSDK = new Visual_UmarB_SDK(this.settings);
        console.log(this.settings.CheckBalanceBtnAreaI, "jaga")
        if (this.settings.CheckBalanceBtnAreaId) {
            let elm = this.visualUmarBSDK.createBtn();
            this.codeUmarB.cheakBalance(elm);
        }
        this.visualUmarBSDK.loadPage('./loginForm.html');
        this.visualUmarBSDK.setEventsLoginPage();
    }
}


