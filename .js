var theRequest = new XMLHttpRequest()

theReqUrl = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json';

theRequest.open('GET',theReqUrl)
theRequest.send()
theRequest.onload = function(){
    var ContrDat = JSON.parse(theRequest.response);
    dataToDisplay = [];
    for(let i=0; i< ContrDat.length;i++){
        dataToDisplay[i] = [ContrDat[i].name,ContrDat[i].region,ContrDat[i].subregion, ContrDat[i].population];
    }
    console.log("Name------Region------Subregion------Population")
    console.log(dataToDisplay)
}