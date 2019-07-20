const popu_100 = {
    "Jammu-Kashmir":{"ids":["Jammu-Kashmir","Himachal-Pradesh"],"values":2},
    "Himachal-Pradesh":{"ids":["Jammu-Kashmir","Himachal-Pradesh"],"values":2},
    "Punjab":{"ids":["Punjab"],"values":2},
    "Chandigarh":{"ids":["Chandigarh","Haryana"],"values":2},
    "Haryana":{"ids":["Haryana","Chandigarh"],"values":2},
    "Uttarakhand":{"ids":["Uttarakhand"],"values":1},
    "Rajasthan":{"ids":["Rajasthan"],"values":5},
    "Delhi":{"ids":["Delhi"],"values":2},
    "Uttar-Pradesh":{"ids":["Uttar-Pradesh"],"values":16},
    "Bihar":{"ids":["Bihar"],"values": 8},
    "Jharkhand":{"ids":["Jharkhand"],"values":2},
    "Gujarat":{"ids":["Gujarat","Dadra-Nagar-Haveli","Daman-Diu"],"values":5},
    "Dadra-Nagar-Haveli":{"ids":["Gujarat","Dadra-Nagar-Haveli","Daman-Diu"],"values":5},
    "Daman-Diu":{"ids":["Gujarat","Dadra-Nagar-Haveli","Daman-Diu"],"values":5},
    "Madhya-Pradesh":{"ids":["Madhya-Pradesh"],"values":6},
    "West-Bengal":{"ids":["West-Bengal","Sikkim"],"values":8},
    "Maharashtra":{"ids":["Maharashtra"],"values":10},
    "Chhattisgarh":{"ids":["Chhattisgarh"],"values":2},
    "Orissa":{"ids":["Orissa"],"values":4},
    "Telangana":{"ids":["Telangana"],"values":3},
    "Andhra-Pradesh":{"ids":["Andhra-Pradesh"],"values":4},
    "Karnataka":{"ids":["Karnataka","Goa"],"values":6},
    "Goa":{"ids":["Karnataka","Goa"],"values":6},
    "Kerala":{"ids":["Kerala","Lakshadweep"],"values":3},
    "Lakshadweep":{"ids":["Kerala","Lakshadweep"],"values":3},
    "Tamil-Nadu":{"ids":["Tamil-Nadu","Puducherry","Andaman-Nicobar"],"values":6},
    "Puducherry":{"ids":["Tamil-Nadu","Puducherry","Andaman-Nicobar"],"values":6},
    "Andaman-Nicobar":{"ids":["Tamil-Nadu","Puducherry","Andaman-Nicobar"],"values":6},
    "Sikkim":{"ids":["West-Bengal","Sikkim"],"values":8},
    "Tripura":{"ids":["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],"values":3},
    "Nagaland":{"ids":["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],"values":3},
    "Mizoram":{"ids":["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],"values":3},
    "Meghalaya":{"ids":["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],"values":3},
    "Manipur":{"ids":["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],"values":3},
    "Arunachal-Pradesh":{"ids":["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],"values":3},
    "Assam":{"ids":["Tripura","Nagaland","Mizoram","Meghalaya","Manipur","Arunachal-Pradesh","Assam"],"values":3},
}

const popu_trend = [[1960,450547679,5.906],[1961,459642165,5.902],[1962,469077190,5.894],[1963,478825608,5.88],[1964,488848135,5.859],[1965,499123324,5.83],[1966,509631500,5.794],[1967,520400576,5.751],[1968,531513824,5.702],[1969,543084336,5.648],[1970,555189792,5.587],[1971,567868018,5.519],[1972,581087256,5.444],[1973,594770134,5.363],[1974,608802600,5.278],[1975,623102897,5.192],[1976,637630087,5.108],[1977,652408776,5.029],[1978,667499806,4.956],[1979,682995354,4.889],[1980,698952844,4.827],[1981,715384993,4.766],[1982,732239504,4.703],[1983,749428958,4.636],[1984,766833410,4.563],[1985,784360008,4.484],[1986,801975244,4.399],[1987,819682102,4.311],[1988,837468930,4.222],[1989,855334678,4.132],[1990,873277798,4.045],[1991,891273209,3.959],[1992,909307016,3.877],[1993,927403860,3.799],[1994,945601831,3.723],[1995,963922588,3.651],[1996,982365243,3.582],[1997,1000900030,3.514],[1998,1019483581,3.446],[1999,1038058156,3.379],[2000,1056575549,3.311],[2001,1075000085,3.243],[2002,1093317189,3.175],[2003,1111523144,3.107],[2004,1129623456,3.038],[2005,1147609927,2.969],[2006,1165486291,2.897],[2007,1183209472,2.823],[2008,1200669765,2.748],[2009,1217726215,2.673],[2010,1234281170,2.601],[2011,1250288729,2.534],[2012,1265782790,2.475],[2013,1280846129,2.425],[2014,1295604184,2.384],[2015,1310152403,2.352],[2016,1324509589,2.326],[2017,1338658835,2.304],[2018,1352617328,2.304]];

window.onload=function(){
    setTimeout(function(){ 
        
    $('#load-icon').hide();
    $('#main-content').show();    
    section1();
    section2();
    section3(); 
    }, 3000);

    
    
}