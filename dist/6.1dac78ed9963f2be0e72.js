(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"QBR+":function(t,e,n){"use strict";n.r(e),n.d(e,"AdminModule",function(){return jt});var r=n("ofXK"),s=n("tyNb"),i=n("j/b1"),o=n("fXoL"),a=n("HDdC"),l=n("DH7j"),u=n("lJxs"),h=n("XoHu"),c=n("Cfvw");function d(t,e){return new a.a(n=>{const r=t.length;if(0===r)return void n.complete();const s=new Array(r);let i=0,o=0;for(let a=0;a<r;a++){const l=Object(c.a)(t[a]);let u=!1;n.add(l.subscribe({next:t=>{u||(u=!0,o++),s[a]=t},error:t=>n.error(t),complete:()=>{i++,i!==r&&u||(o===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=s[n],t),{}):s),n.complete())}}))}})}const p=new o.q("NgValueAccessor"),g={provide:p,useExisting:Object(o.S)(()=>_),multi:!0};let _=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"checked",t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(o.D),o.Gb(o.l))},t.\u0275dir=o.Bb({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(t,e){1&t&&o.Sb("change",function(t){return e.onChange(t.target.checked)})("blur",function(){return e.onTouched()})},features:[o.vb([g])]}),t})();const f={provide:p,useExisting:Object(o.S)(()=>y),multi:!0},m=new o.q("CompositionEventMode");let y=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(r.p)()?Object(r.p)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(o.D),o.Gb(o.l),o.Gb(m,8))},t.\u0275dir=o.Bb({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&o.Sb("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[o.vb([f])]}),t})();function b(t){return null==t||0===t.length}function v(t){return null!=t&&"number"==typeof t.length}const C=new o.q("NgValidators"),V=new o.q("NgAsyncValidators"),w=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class A{static min(t){return e=>{if(b(e.value)||b(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}static max(t){return e=>{if(b(e.value)||b(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}static required(t){return b(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return b(t.value)||w.test(t.value)?null:{email:!0}}static minLength(t){return e=>b(e.value)||!v(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}static maxLength(t){return e=>v(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}static pattern(t){if(!t)return A.nullValidator;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(b(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}static nullValidator(t){return null}static compose(t){if(!t)return null;const e=t.filter(O);return 0==e.length?null:function(t){return S(D(t,e))}}static composeAsync(t){if(!t)return null;const e=t.filter(O);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if(Object(l.a)(e))return d(e,null);if(Object(h.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return d(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return d(t=1===t.length&&Object(l.a)(t[0])?t[0]:t,null).pipe(Object(u.a)(t=>e(...t)))}return d(t,null)}(D(t,e).map(E)).pipe(Object(u.a)(S))}}}function O(t){return null!=t}function E(t){const e=Object(o.ob)(t)?Object(c.a)(t):t;return Object(o.nb)(e),e}function S(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function D(t,e){return e.map(e=>e(t))}function k(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function T(t){return null!=t?A.compose(k(t)):null}function M(t){return null!=t?A.composeAsync(k(t)):null}function P(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function j(t){return t._rawValidators}function x(t){return t._rawAsyncValidators}let F=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=T(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=M(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.Bb({type:t}),t})(),G=(()=>{class t extends F{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(e){return N(e||t)},t.\u0275dir=o.Bb({type:t,features:[o.tb]}),t})();const N=o.Nb(G);class W extends F{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class R{constructor(t){this._cd=t}get ngClassUntouched(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.untouched)&&void 0!==n&&n}get ngClassTouched(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.touched)&&void 0!==n&&n}get ngClassPristine(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.pristine)&&void 0!==n&&n}get ngClassDirty(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.dirty)&&void 0!==n&&n}get ngClassValid(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.valid)&&void 0!==n&&n}get ngClassInvalid(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.invalid)&&void 0!==n&&n}get ngClassPending(){var t,e,n;return null!==(n=null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e?void 0:e.pending)&&void 0!==n&&n}}let B=(()=>{class t extends R{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(W,2))},t.\u0275dir=o.Bb({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&o.yb("ng-untouched",e.ngClassUntouched)("ng-touched",e.ngClassTouched)("ng-pristine",e.ngClassPristine)("ng-dirty",e.ngClassDirty)("ng-valid",e.ngClassValid)("ng-invalid",e.ngClassInvalid)("ng-pending",e.ngClassPending)},features:[o.tb]}),t})(),I=(()=>{class t extends R{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(G,10))},t.\u0275dir=o.Bb({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:14,hostBindings:function(t,e){2&t&&o.yb("ng-untouched",e.ngClassUntouched)("ng-touched",e.ngClassTouched)("ng-pristine",e.ngClassPristine)("ng-dirty",e.ngClassDirty)("ng-valid",e.ngClassValid)("ng-invalid",e.ngClassInvalid)("ng-pending",e.ngClassPending)},features:[o.tb]}),t})();const U={provide:p,useExisting:Object(o.S)(()=>L),multi:!0};let L=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(o.D),o.Gb(o.l))},t.\u0275dir=o.Bb({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,e){1&t&&o.Sb("input",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},features:[o.vb([U])]}),t})();const $={provide:p,useExisting:Object(o.S)(()=>H),multi:!0};let q=(()=>{class t{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Cb({token:t,factory:t.\u0275fac}),t})(),H=(()=>{class t{constructor(t,e,n,r){this._renderer=t,this._elementRef=e,this._registry=n,this._injector=r,this.onChange=()=>{},this.onTouched=()=>{}}ngOnInit(){this._control=this._injector.get(W),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}fireUncheck(t){this.writeValue(t)}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(o.D),o.Gb(o.l),o.Gb(q),o.Gb(o.r))},t.\u0275dir=o.Bb({type:t,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(t,e){1&t&&o.Sb("change",function(){return e.onChange()})("blur",function(){return e.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[o.vb([$])]}),t})();const Z={provide:p,useExisting:Object(o.S)(()=>z),multi:!0};let z=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(t))}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(o.D),o.Gb(o.l))},t.\u0275dir=o.Bb({type:t,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(t,e){1&t&&o.Sb("change",function(t){return e.onChange(t.target.value)})("input",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},features:[o.vb([Z])]}),t})();const K={provide:p,useExisting:Object(o.S)(()=>X),multi:!0};let X=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=function(t,e){return null==t?""+e:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=e=>{this.value=this._getOptionValue(e),t(this.value)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(o.D),o.Gb(o.l))},t.\u0275dir=o.Bb({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(t,e){1&t&&o.Sb("change",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[o.vb([K])]}),t})();const J={provide:p,useExisting:Object(o.S)(()=>Q),multi:!0};let Q=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=(t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)}}else e=(t,e)=>{t._setSelected(!1)};this._optionMap.forEach(e)}registerOnChange(t){this.onChange=e=>{const n=[];if(void 0!==e.selectedOptions){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const r=t.item(e),s=this._getOptionValue(r.value);n.push(s)}}else{const t=e.options;for(let e=0;e<t.length;e++){const r=t.item(e);if(r.selected){const t=this._getOptionValue(r.value);n.push(t)}}}this.value=n,t(n)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(o.D),o.Gb(o.l))},t.\u0275dir=o.Bb({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(t,e){1&t&&o.Sb("change",function(t){return e.onChange(t.target)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[o.vb([J])]}),t})();function Y(t,e){et(t,e,!0),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&rt(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&rt(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function tt(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function et(t,e,n){const r=j(t);null!==e.validator?t.setValidators(P(r,e.validator)):"function"==typeof r&&t.setValidators([r]);const s=x(t);if(null!==e.asyncValidator?t.setAsyncValidators(P(s,e.asyncValidator)):"function"==typeof s&&t.setAsyncValidators([s]),n){const n=()=>t.updateValueAndValidity();tt(e._rawValidators,n),tt(e._rawAsyncValidators,n)}}function nt(t,e,n){if(null!==t){if(null!==e.validator){const n=j(t);Array.isArray(n)&&n.length>0&&t.setValidators(n.filter(t=>t!==e.validator))}if(null!==e.asyncValidator){const n=x(t);Array.isArray(n)&&n.length>0&&t.setAsyncValidators(n.filter(t=>t!==e.asyncValidator))}}if(n){const t=()=>{};tt(e._rawValidators,t),tt(e._rawAsyncValidators,t)}}function rt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function st(t,e){et(t,e,!1)}const it=[_,z,L,X,Q,H];function ot(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const at="VALID",lt="INVALID",ut="PENDING",ht="DISABLED";function ct(t){return(_t(t)?t.validators:t)||null}function dt(t){return Array.isArray(t)?T(t):t||null}function pt(t,e){return(_t(e)?e.asyncValidators:t)||null}function gt(t){return Array.isArray(t)?M(t):t||null}function _t(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class ft{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=dt(this._rawValidators),this._composedAsyncValidatorFn=gt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===at}get invalid(){return this.status===lt}get pending(){return this.status==ut}get disabled(){return this.status===ht}get enabled(){return this.status!==ht}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=dt(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=gt(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=ut,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=ht,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=at,this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==at&&this.status!==ut||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ht:at}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=ut,this._hasOwnPendingAsyncValidator=!0;const e=E(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let r=t;return e.forEach(t=>{r=r instanceof yt?r.controls.hasOwnProperty(t)?r.controls[t]:null:r instanceof bt&&r.at(t)||null}),r}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.n,this.statusChanges=new o.n}_calculateStatus(){return this._allControlsDisabled()?ht:this.errors?lt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ut)?ut:this._anyControlsHaveStatus(lt)?lt:at}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){_t(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class mt extends ft{constructor(t=null,e,n){super(ct(e),pt(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){ot(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){ot(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class yt extends ft{constructor(t,e,n){super(ct(e),pt(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof mt?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>t(this.controls[e],e))}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class bt extends ft{constructor(t,e,n){super(ct(e),pt(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof mt?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error("Cannot find form control at index "+t)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let vt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.Bb({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})();const Ct=new o.q("NgModelWithFormControlWarning"),Vt={provide:G,useExisting:Object(o.S)(()=>wt)};let wt=(()=>{class t extends G{constructor(t,e){super(),this.validators=t,this.asyncValidators=e,this.submitted=!1,this.directives=[],this.form=null,this.ngSubmit=new o.n,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const e=this.form.get(t.path);return Y(e,t),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){ot(this.directives,t)}addFormGroup(t){const e=this.form.get(t.path);st(e,t),e.updateValueAndValidity({emitEvent:!1})}removeFormGroup(t){}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){const e=this.form.get(t.path);st(e,t),e.updateValueAndValidity({emitEvent:!1})}removeFormArray(t){}getFormArray(t){return this.form.get(t.path)}updateModel(t,e){this.form.get(t.path).setValue(e)}onSubmit(t){return this.submitted=!0,e=this.directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const e=this.form.get(t.path);t.control!==e&&(function(t,e){const n=()=>{};e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n),nt(t,e,!0),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}(t.control||null,t),e&&Y(e,t),t.control=e)}),this.form._updateTreeValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(()=>this._updateDomValue()),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){et(this.form,this,!1),this._oldForm&&nt(this._oldForm,this,!1)}_checkFormPresent(){}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(C,10),o.Gb(V,10))},t.\u0275dir=o.Bb({type:t,selectors:[["","formGroup",""]],hostBindings:function(t,e){1&t&&o.Sb("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o.vb([Vt]),o.tb,o.ub]}),t})();const At={provide:W,useExisting:Object(o.S)(()=>Ot)};let Ot=(()=>{class t extends W{constructor(t,e,n,r,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.update=new o.n,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=function(t,e){if(!e)return null;Array.isArray(e);let n=void 0,r=void 0,s=void 0;return e.forEach(t=>{var e;t.constructor===y?n=t:(e=t,it.some(t=>e.constructor===t)?r=t:s=t)}),s||r||n||null}(0,r)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return t=null==this.name?this.name:this.name.toString(),[...this._parent.path,t];var t}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(G,13),o.Gb(C,10),o.Gb(V,10),o.Gb(p,10),o.Gb(Ct,8))},t.\u0275dir=o.Bb({type:t,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o.vb([At]),o.tb,o.ub]}),t._ngModelWarningSentOnce=!1,t})(),Et=(()=>{class t{}return t.\u0275mod=o.Eb({type:t}),t.\u0275inj=o.Db({factory:function(e){return new(e||t)}}),t})(),St=(()=>{class t{group(t,e=null){const n=this._reduceControls(t);let r=null,s=null,i=void 0;return null!=e&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(e)?(r=null!=e.validators?e.validators:null,s=null!=e.asyncValidators?e.asyncValidators:null,i=null!=e.updateOn?e.updateOn:void 0):(r=null!=e.validator?e.validator:null,s=null!=e.asyncValidator?e.asyncValidator:null)),new yt(n,{asyncValidators:s,updateOn:i,validators:r})}control(t,e,n){return new mt(t,e,n)}array(t,e,n){const r=t.map(t=>this._createControl(t));return new bt(r,e,n)}_reduceControls(t){const e={};return Object.keys(t).forEach(n=>{e[n]=this._createControl(t[n])}),e}_createControl(t){return t instanceof mt||t instanceof yt||t instanceof bt?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Cb({token:t,factory:t.\u0275fac}),t})(),Dt=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Ct,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275mod=o.Eb({type:t}),t.\u0275inj=o.Db({factory:function(e){return new(e||t)},providers:[St,q],imports:[Et]}),t})();var kt=n("KksF");function Tt(t,e){if(1&t){const t=o.Mb();o.Lb(0,"p"),o.dc(1),o.Lb(2,"button",5),o.Sb("click",function(){o.Zb(t);const n=e.$implicit;return o.Ub().deleteWord(n.id)}),o.dc(3,"Delete"),o.Kb(),o.Kb()}if(2&t){const t=e.$implicit,n=e.index;o.wb(1),o.hc(" ",n+1,". ",t.word," - ",t.translateWord," ")}}const Mt=[{path:"",component:(()=>{class t{constructor(t){this.wordsService=t,this.form=new yt({word:new mt(null,A.required),translateWord:new mt(null,A.required)})}ngOnInit(){this.initWords()}addWord(){const t=this.form.controls.word.value.toLowerCase(),e=this.form.controls.translateWord.value.toLowerCase();this.wordsService.addUkraineWord({word:t,isVisible:!0,translateWord:e}).subscribe(t=>{this.words.push(t),this.form.reset()})}deleteWord(t){this.wordsService.deleteWord(t).subscribe(()=>{this.words=this.words.filter(e=>e.id!==t)})}initWords(){this.words$=this.wordsService.getWords(),this.words$.subscribe(t=>{this.words=t,this.words.map(t=>new i.a(t))})}}return t.\u0275fac=function(e){return new(e||t)(o.Gb(kt.a))},t.\u0275cmp=o.Ab({type:t,selectors:[["ng-component"]],decls:13,vars:3,consts:[[3,"formGroup","ngSubmit"],["type","text","formControlName","word",2,"color","black"],["type","text","formControlName","translateWord",2,"color","black"],["type","submit",2,"color","black",3,"disabled"],[4,"ngFor","ngForOf"],[2,"color","black",3,"click"]],template:function(t,e){1&t&&(o.Hb(0,"br"),o.Hb(1,"br"),o.Lb(2,"form",0),o.Sb("ngSubmit",function(){return e.addWord()}),o.Lb(3,"label"),o.dc(4," word: "),o.Hb(5,"input",1),o.Kb(),o.Lb(6,"label"),o.dc(7," translate word: "),o.Hb(8,"input",2),o.Kb(),o.Lb(9,"button",3),o.dc(10,"Add word"),o.Kb(),o.Kb(),o.Hb(11,"br"),o.cc(12,Tt,4,3,"p",4)),2&t&&(o.wb(2),o.Xb("formGroup",e.form),o.wb(7),o.Xb("disabled",e.form.invalid),o.wb(3),o.Xb("ngForOf",e.words))},directives:[vt,I,wt,y,B,Ot,r.i],styles:[""]}),t})()}];let Pt=(()=>{class t{}return t.\u0275mod=o.Eb({type:t}),t.\u0275inj=o.Db({factory:function(e){return new(e||t)},imports:[[s.a.forChild(Mt)],s.a]}),t})(),jt=(()=>{class t{}return t.\u0275mod=o.Eb({type:t}),t.\u0275inj=o.Db({factory:function(e){return new(e||t)},providers:[kt.a],imports:[[r.b,Pt,Dt]]}),t})()}}]);