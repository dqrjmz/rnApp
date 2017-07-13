export class GetData {
    postFetch(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data?data:'')
        }).then((res) => {
            return res.json();
        });
    }

    getFetch(url, data) {
        url=url+'?'+(this.jsonToForm(data));
        return fetch(url).then((res)=>{
            return res.json();
        });
    }

    /**
     * 发送表单类型数据
     * @param {string} url 
     * @param {object} data 
     */
    postFormFetch(url, data) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: this.jsonToForm(data)
        }).then((res)=>{
            return res.json();
        })
    }

    /**
     * 将json转化为form发送数据
     * @param {*} data json数据
     */
    jsonToForm(data) {
        if(!data){return '';}
        let params = '';
        for (item in data) {
            params += item + '=' + data[item] + '&'
        }
        return params.substr(0, params.length - 1);
    }
}

