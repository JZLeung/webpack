<template{{#if_eq template "pug"}} lang="pug"{{/if_eq}}>
  {{#if_eq template "pug"}}
  #app
    img(src='./assets/logo.png')
    {{#router}}
    router-view
    {{else}}
    HelloWorld
    {{/router}}
    {{#if_eq ratio "vw"}}
    .test.vw
      | height: 200px;<br>
      | width:200px;
    div
      div(aspectratio,w-200-200)
        div(aspectratio-content)
          | w-200-200
      div(aspectratio,w-200-200)
        div(aspectratio-content)
          | w-200-200
    {{/if_eq}}
  {{else}}
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
    {{#if_eq ratio "vw"}}
    <div class="test vw">
      height: 200px;<br>
      width:200px;
    </div>
    <div>
      <div aspectratio  w-200-200>
        <div aspectratio-content>w-200-200</div>
      </div>
      <div aspectratio  w-200-200>
        <div aspectratio-content>w-200-200</div>
      </div>
    </div>
    {{/if_eq}}
  </div>
  {{/if_eq}}
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
{{#if_eq ratio "vw"}}
.test.vw{
  height: 200px;
  width: 200px;
  border: 1px solid #333;
}
[aspectratio] {
  position: relative;
}

[aspectratio]::before {
  content: '';
  display: block;
  width: 1px;
  margin-left: -1px;
  height: 0;
}

[aspectratio-content] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
[w-200-200] {
  width: 200px;
  display: block;
  background: #000;
  line-height: 200px;
  border: 1px solid #fff;
  box-sizing: border-box
}
[w-200-200] {
  aspect-ratio: '200:200';
}
{{/if_eq}}
</style>
