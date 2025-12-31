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
    formSwitch(element) {
        if (element.style.display == "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
    async getLocalFile(url, addElement) {
        let data2 = await this.http.httpRequest({
            method: 'get',
            url: url,
            externalUrl: true,
            responseType: 'html'
        });
        console.log("hello", data2);
        addElement.innerHTML = data2;
        //return data2.data;
    }


}