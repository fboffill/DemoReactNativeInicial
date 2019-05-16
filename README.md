# DemoReact Native Inicial
En este ejemplo, se puede ver como crear un proyecto ReactNative e integrarlo con Native Base.
Además de toda la configuración del ambiente para su desarrollo.
**Crear proyecto**
react-native init DemoReactNativeInicial --package=XXX.XXXX.demoReactNativeInicial

***Prerrequisitos***
(https://www.npmjs.com/package/react-native-init)

Si luego de crear el proyecto, queremos ejecutarlo con el comando **react-native run-ios** se generará un error porque falta crear el archivo **ios/main.jsbundle**

## Crear el ios/main.jsbundle que permite compilar el proyecto ios
react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
https://medium.com/@tunvirrahmantusher/create-ipa-and-apk-from-react-native-72fe53c6a8db

## Instalar NativeBase y sus dependecias
npm install native-base --save
react-native link

## Ejecutar emulador ios
react-native run-ios 


## Instalar módulos para el ambiente de desarrollo.
npm install --save-dev eslint

npm install --save-dev eslint-plugin-react-native

npm install --save-dev eslint-loader
npm install --save-dev eslint-friendly-formatter
npm install --save-dev eslint-config-airbnb
npm install --save-dev eslint-plugin-import
npm install --save-dev eslint-plugin-jsx-a11y
npm install --save-dev babel-eslint

**Explicación de las dependencias**

eslint — Core dependency.
eslint-plugin-react — React specific linting rules for ESLint.
eslint-loader — Webpack loader for eslint.
eslint-friendly-formatter — Custom formatter for eslint results. Add a nice summary of errors or warnings in the end, plus highlights statement causing the error or warning.
eslint-config-airbnb — Airbnb style guide based eslint rules.
eslint-plugin-import — Required for linting of ES2015+ (ES6+) import/export syntax.
eslint-plugin-jsx-a11y — Support for accessibility rules on JSX elements.
babel-eslint — Parser to replace eslint default if we are using class properties, decorators, async/await, types.

### Configurar ESLint

node_modules/.bin/eslint --init


## Posibles Errores
### Error 1
Failed to load bundle(http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false) with error:(Metro Bundler has encountered an internal error, please check your terminal error output for more details (null))

__38-[RCTCxxBridge loadSource:onProgress:]_block_invoke.228
    RCTCxxBridge.mm:414
___ZL36attemptAsynchronousLoadOfBundleAtURLP5NSURLU13block_pointerFvP18RCTLoadingProgressEU13block_pointerFvP7NSErrorP9RCTSourceE_block_invoke.118
__80-[RCTMultipartDataTask URLSession:streamTask:didBecomeInputStream:outputStream:]_block_invoke
-[RCTMultipartStreamReader emitChunk:headers:callback:done:]
-[RCTMultipartStreamReader readAllPartsWithCompletionCallback:progressCallback:]
-[RCTMultipartDataTask URLSession:streamTask:didBecomeInputStream:outputStream:]
__88-[NSURLSession delegate_streamTask:didBecomeInputStream:outputStream:completionHandler:]_block_invoke
__NSBLOCKOPERATION_IS_CALLING_OUT_TO_A_BLOCK__
-[NSBlockOperation main]
-[__NSOperationInternal _start:]
__NSOQSchedule_f
_dispatch_call_block_and_release
_dispatch_client_callout
_dispatch_continuation_pop
_dispatch_async_redirect_invoke
_dispatch_root_queue_drain
_dispatch_worker_thread2
_pthread_wqthread
start_wqthread

**Solución**: abrir el proyecto con el xcode y ejecutar el simulador, luego se puede volver al react-native run-ios

### Error2
An error was encountered processing the command (domain=FBSOpenApplicationServiceErrorDomain, code=1): The request to open

**Solución**
rm -rf node_modules (or just delete the node_modules directory however you can)
yarn (or if you use npm: npm install)
react-native link
react-native run-ios
https://github.com/react-native-community/react-native-tab-view/issues/484