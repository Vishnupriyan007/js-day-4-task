var theRequest = new XMLHttpRequest()


theReqUrl = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';

theRequest.open('GET',theReqUrl)
theRequest.send()
theRequest.onload = function(){
    var ContrDat = JSON.parse(theRequest.response);
    for(let i=0; i< ContrDat.length;i++){
        console.log(ContrDat[i].flag)
    }
}