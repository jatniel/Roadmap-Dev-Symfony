"use strict";(self.webpackChunkroadmap_symfony=self.webpackChunkroadmap_symfony||[]).push([[2951],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5768:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:4},l="Twig",u={unversionedId:"symfony/twig",id:"symfony/twig",isDocsHomePage:!1,title:"Twig",description:"Twig est un langage qui va nous permettre de g\xe9n\xe9rer des pages HTML dynamiques. Il s'appuie sur le language HTML classique mais rajoute une syntaxe suppl\xe9mentaire. Cette syntaxe est simple et ne g\xe8nera pas un int\xe9grateur qui ne connait pas le Twig.",source:"@site/docs/06-symfony/04-twig.md",sourceDirName:"06-symfony",slug:"/symfony/twig",permalink:"/Roadmap-Dev-Symfony/docs/symfony/twig",editUrl:"https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/edit/main/docs/06-symfony/04-twig.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Les contr\xf4leurs",permalink:"/Roadmap-Dev-Symfony/docs/symfony/controleurs"},next:{title:"Les mod\xe8les",permalink:"/Roadmap-Dev-Symfony/docs/symfony/modeles"}},p=[{value:"Ressources",id:"ressources",children:[],level:2}],c={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"twig"},"Twig"),(0,o.kt)("p",null,"Twig est un langage qui va nous permettre de g\xe9n\xe9rer des pages HTML ",(0,o.kt)("strong",{parentName:"p"},"dynamiques"),". Il s'appuie sur le language HTML classique mais rajoute une syntaxe suppl\xe9mentaire. Cette syntaxe est simple et ne g\xe8nera pas un int\xe9grateur qui ne connait pas le Twig."),(0,o.kt)("p",null,"Prenons un exemple : "),(0,o.kt)("p",null,"Dans un contr\xf4leur, on demande \xe0 Symfony de g\xe9n\xe9rer une page HTML en lui passant le chemin vers un template Twig et \xe9ventuellement des donn\xe9es \xe0 lui passer en second param\xe8tre."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#[Route('/hello', name: 'presentation')]\npublic function presentation(): Response\n{\n    return $this->render('presentation/index.html.twig', [\n        'firstname' => 'John',\n        'age' => 34,\n        'hobbies' => ['HTML', 'CSS', 'PHP']\n    ]);\n}\n")),(0,o.kt)("p",null,"Ici, le contr\xf4leur fait appel \xe0 la m\xe9thode ",(0,o.kt)("inlineCode",{parentName:"p"},"render"),", en lui passant en premier param\xe8tre le chemin du fichier Twig ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html.twig")," (ici dans le r\xe9pertoire ",(0,o.kt)("inlineCode",{parentName:"p"},"templates/presentation"),")."),(0,o.kt)("p",null,"On lui passe en second param\xe8tre les donn\xe9es qu'on va utiliser dans le template sous la forme d'un tableau associatif."),(0,o.kt)("p",null,"Le fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html.twig")," va alors ressembler \xe0 ceci : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h1>Votre pr\xe9non est {{ firstname }}</h1>\n\n{% if age >= 18 %}\n    <h4>Vous \xeates majeur</h4>\n{% else %}\n    <h4>Vous \xeates mineur</h4>\n{% endif %}\n\nVos hobby sont :\n\n<ul>\n    {% for hobby in hobbies %}\n        <li>{{ hobby }}</li>\n    {% endfor %}\n</ul>\n")),(0,o.kt)("p",null,"Ici, on utilise la variable ",(0,o.kt)("inlineCode",{parentName:"p"},"firstname")," qu'on a pass\xe9e au template avec la syntaxe des doubles accolades."),(0,o.kt)("p",null,"On utilise ensuite une commande Twig pour g\xe9rer une condition et afficher un texte diff\xe9rent selon la valeur de la variable ",(0,o.kt)("inlineCode",{parentName:"p"},"age"),"."),(0,o.kt)("p",null,"Enfin, on utlise une commande Twig pour g\xe9rer les boucles. Ici, on boucle sur chaque \xe9l\xe9ment pr\xe9sent dans le tableau qu'on a pass\xe9 \xe0 Twig via la variable ",(0,o.kt)("inlineCode",{parentName:"p"},"hobbies"),", et on affiche chaque \xe9l\xe9ment dans une liste. "),(0,o.kt)("h2",{id:"ressources"},"Ressources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://grafikart.fr/tutoriels/routing-1065#autoplay"},"Apprendre \xe0 g\xe9rer Twig avec Symfony par Grafikart"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=OG-ALaraXoo&list=PLBq3aRiVuwyzI0MT4LhvwqkVenz5pF_DM&index=8&ab_channel=NouvelleTechno"},"Apprendre \xe0 g\xe9rer Twig avec Symfony par Nouvelle-Techno.fr")))))}m.isMDXComponent=!0}}]);