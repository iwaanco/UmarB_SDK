import { HttpRequest } from './http.js';

export class Code_UmarB {
    http;
    constructor() {
        this.http = new HttpRequest();
    }
    cheakBalance(element) {
        console.log("req", element);
        if (element) {
            element.addEventListener('click', function () {
                this.http.httpRequest({
                    method: 'get',
                    url: 'umar-b/check_balance/'
                }).then(function (data) {
                    console.log(e)
                }).cacth(function (error) {

                })
            }.bind(this))
        }
    }
    formOpen(element) {
        element.style.display = "block";
    }
    formClose(element) {
        element.style.display = "none";
    }
    changeForm(iframe, filename) {

    }

}