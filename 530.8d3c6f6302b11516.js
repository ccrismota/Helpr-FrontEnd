"use strict";(self.webpackChunkhelpr=self.webpackChunkhelpr||[]).push([[530],{2530:(U,g,n)=>{n.r(g),n.d(g,{AuthModule:()=>S});var c=n(9808),h=n(1083),e=n(3075),t=n(5e3),p=n(4253),f=n(6850),s=n(7322),d=n(7531),A=n(5245),v=n(7423);function Z(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo obrigat\xf3rio"),t.qZA())}function C(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo obrigat\xf3rio"),t.qZA())}function T(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"O m\xednimo s\xe3o 8 caracteres"),t.qZA())}const F=[{path:"",component:(()=>{class o{constructor(r,i,a,u){this.fb=r,this.authService=i,this.router=a,this.toast=u,this.loginForm=this.fb.group({email:["",[e.kI.required,e.kI.email]],senha:["",[e.kI.required,e.kI.minLength(8)]]})}onSubmit(){const{email:r,senha:i}=this.loginForm.value,a=this.toast.loading("Fazendo login...");this.authService.login(r,i).subscribe({next:u=>{a.close();const m=u.headers.get("Authorization");this.authService.onLogin(m.substring(7)),this.router.navigate(["/"])},error:u=>{this.toast.error("Email ou senha inv\xe1lido(s)"),a.close()}})}ngOnInit(){}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(e.qu),t.Y36(p.e),t.Y36(h.F0),t.Y36(f.jE))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-auth"]],decls:20,vars:5,consts:[[1,"form-wrapper","form-container"],["src","assets/img/ext1.png","width","256px"],[3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","placeholder","Email do cliente","formControlName","email","type","email","required",""],[4,"ngIf"],["matPrefix",""],["matInput","","placeholder","Senha do cliente","formControlName","senha","type","password","required",""],["mat-raised-button","","color","primary",3,"disabled"]],template:function(r,i){if(1&r&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"form",2),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(3,"mat-form-field",3)(4,"mat-label"),t._uU(5,"Email"),t.qZA(),t._UZ(6,"input",4),t.YNc(7,Z,2,0,"mat-error",5),t.TgZ(8,"mat-icon",6),t._uU(9,"email"),t.qZA()(),t.TgZ(10,"mat-form-field",3)(11,"mat-label"),t._uU(12,"Senha"),t.qZA(),t._UZ(13,"input",7),t.YNc(14,C,2,0,"mat-error",5),t.YNc(15,T,2,0,"mat-error",5),t.TgZ(16,"mat-icon",6),t._uU(17,"key"),t.qZA()(),t.TgZ(18,"button",8),t._uU(19," Login "),t.qZA()()()),2&r){let a,u,m;t.xp6(2),t.Q6J("formGroup",i.loginForm),t.xp6(5),t.Q6J("ngIf",null==(a=i.loginForm.get("email"))||null==a.errors?null:a.errors.required),t.xp6(7),t.Q6J("ngIf",null==(u=i.loginForm.get("senha"))||null==u.errors?null:u.errors.required),t.xp6(1),t.Q6J("ngIf",null==(m=i.loginForm.get("senha"))||null==m.errors?null:m.errors.minlength),t.xp6(3),t.Q6J("disabled",i.loginForm.invalid)}},directives:[e._Y,e.JL,e.sg,s.KE,s.hX,d.Nt,e.Fj,e.JJ,e.u,e.Q7,c.O5,s.TO,A.Hw,s.qo,v.lW],styles:[".form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;box-sizing:border-box}"]}),o})()}];let y=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[h.Bz.forChild(F)],h.Bz]}),o})();var b=n(1783);let S=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,y,b.q,e.UX]]}),o})()}}]);