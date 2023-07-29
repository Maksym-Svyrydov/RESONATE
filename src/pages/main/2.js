function stringChecker("radency","radency", ""
	) Expected: true
	Actual: undefined


function stringChecker("radency","", "radency"
	) Expected: true
	Actual: undefined


function stringChecker("radency","rade", "ncyy"
	) Expected: false
	Actual: undefined


function stringChecker("radency","rade", "nc"
	) Expected: false
	Actual: undefined


function stringChecker("radency","rade", "ncy"
	) Expected: true
	Actual: undefined


function stringChecker("radency","rdnc", "aey"
	) Expected: true
	Actual: undefined


function stringChecker("radency","rad", "ncy"
	) Expected: false
	Actual: undefined


function stringChecker("radency","rade", "nyc"
	) Expected: false
	Actual: undefined


function stringChecker("Will do","Wl o", "ild"
	) Expected: true
	Actual: undefined


function stringChecker("Do you have a cup of tea? Yes, I do!"," yo ha a cof tea Yes I", "Douveup ?, do!"
	) Expected: true
	Actual: undefined


function stringChecker("Do you have a cup of tea? Yes, I do!"," yo ha a cof tea I", "Dou veup ?, do!"
	) Expected: false
	Actual: undefined


function stringChecker("Hacker News!","Haerws", "ck Ne!"
	) Expected: true
	Actual: undefined


function stringChecker("Hacker News!","cker Ne", "Haws!"
	) Expected: true
	Actual: undefined


function stringChecker(" Hacker News! ","Hacker", "News"
	) Expected: false
	Actual: undefined


function stringChecker(" Hacker News! ","Hacker Ne", "ws! "
	) Expected: false
	Actual: undefined


function stringChecker(" Hacker News! "," cker s ", "HaNew!"
	) Expected: true
	Actual: undefined


function stringChecker(" Hacker News! ","Hacker Ne", "ws! "
	) Expected: false
	Actual: undefined


function stringChecker(" Hacker News! "," Hacker News ", "!"
	) Expected: true
	Actual: undefined


function stringChecker("Hacker News!","0Sy*qBhY", "aN6n>0mB0a^g"
	) Expected: false
	Actual: undefined


function stringChecker("Hacker News!","aN6n>0mB0a^g", "0Sy*qBhY")
Expected: false
Actual: undefined

   ;
function stringChecker(s=("F?NI3+6'sK2.M""), p1=("NI3+6s"), p2=("F?'K2.M""))
 Expected: true
	Actual: undefined


function stringChecker("w27y7","27", "w7y"
	) Expected: true
	Actual: undefined


Test failed with: Random Test -  S = "6WRnyoy4xmPtJzR1z4s","6WRnyoy4xmPtJzR1z4s", ""
	) Expected: true
	Actual: undefined


Test failed with: Random Test -  S = "p9p3POYh0a r2eZTTb ","", "p9p3POYh0a r2eZTTb "
	) Expected: true
	Actual: undefined


Test failed with: Random Test -  S = "46PCWEtH1LJoqf0hnq3","46PCWEtH1", "LJoqf0hnq33"
	) Expected: false
	Actual: undefined


Test failed with: Random Test -  S = "bU7CpQl3TTnNJWBbP38","bU7CpQl3T", "TnNJWBbP3"
	) Expected: false
	Actual: undefined


Test failed with: Random Test -  S = "fOBR688sl69KNa86DrF","fOBR688sl", "69KNa86DrF"
	) Expected: true
	Actual: undefined


Test failed with: Random Test -  S = "fszElbEK8BNeaGeekdX","fzlE8NaekX", "sEbKBeGed"
	) Expected: true
	Actual: undefined


Test failed with: Random Test -  S = "CD0QeAtyWPnu2ZZkmPJ","CD0Qetynu2ZkmP", "AWPZJ"
	) Expected: true
	Actual: undefined


Test failed with: Random Test -  S = "mu9hGTQ7cwywPSk8B4v","mu9hGTQ7", "wywPSk8B4v"
	) Expected: false
	Actual: undefined


Test failed with: Random Test -  S = "iSufI10o4OLT1PxRH H","iSufI10o4", "xPH 1TOLHR"
	) Expected: false
	Actual: undefined


Test failed with: Random Test -  S = "5iYHwIL47i64cwyp07T","wL5I47YiH", "i64cwyp07T"
	) Expected: false
	Actual: undefined


Test failed with: Random Test -  S = "OMlW6b0R2naBJ7bG6QQ","W20OlbM6R", "nQJGb7Qa6B"
	) Expected: false
	Actual: undefined


Test failed with: Random Test -  S = "uO2 RaK63UnMe ZvGD7","kWKn 55CFa", "b bE1 oE22"
	) Expected: false
	Actual: undefined


Test failed with: Random Test -  S = "U48KxxzK99ey8ijXpxO8","U48KxxzK99", "ey8ijXpxO8"
	) Expected: true
	Actual: undefined