$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/user.feature");
formatter.feature({
  "name": "User Verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "three point verification (UI,DATABASE,API)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.step({
  "name": "user logs in using \"\u003cemail\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "When "
});
formatter.step({
  "name": "I logged Bookit api using \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "And "
});
formatter.step({
  "name": "UI,API and Database user information must be match",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "sbirdbj@fc2.com",
        "asenorval"
      ]
    },
    {
      "cells": [
        "wdanglz@yahoo.com",
        "winfielddangl"
      ]
    }
  ]
});
formatter.scenario({
  "name": "three point verification (UI,DATABASE,API)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"sbirdbj@fc2.com\" \"asenorval\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyInfoStepDefs.user_logs_in_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "When "
});
formatter.match({
  "location": "MyInfoStepDefs.user_is_on_the_my_self_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged Bookit api using \"sbirdbj@fc2.com\" and \"asenorval\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.i_logged_Bookit_api_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UI,API and Database user information must be match",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.ui_API_and_Database_user_information_must_be_match()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "three point verification (UI,DATABASE,API)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@db"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"wdanglz@yahoo.com\" \"winfielddangl\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MyInfoStepDefs.user_logs_in_using(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the my self page",
  "keyword": "When "
});
formatter.match({
  "location": "MyInfoStepDefs.user_is_on_the_my_self_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Fths-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:42c:154c:f5fd:b053%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.4\u0027, java.version: \u002712.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\n\tat com.bookit.pages.TopNavigationBar.goToSelf(TopNavigationBar.java:38)\n\tat com.bookit.step_definitions.MyInfoStepDefs.user_is_on_the_my_self_page(MyInfoStepDefs.java:43)\n\tat ✽.user is on the my self page(file:src/test/resources/features/user.feature:27)\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Fths-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:42c:154c:f5fd:b053%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.4\u0027, java.version: \u002712.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\n\t\tat com.bookit.pages.TopNavigationBar.goToSelf(TopNavigationBar.java:38)\n\t\tat com.bookit.step_definitions.MyInfoStepDefs.user_is_on_the_my_self_page(MyInfoStepDefs.java:43)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\t\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\t\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\t\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\t\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\t\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\t\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\t\tat cucumber.runner.TestCase.run(TestCase.java:46)\n\t\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\t\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\t\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\t\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\t\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\t\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\t\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\t\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:608)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\n\tat com.bookit.pages.TopNavigationBar.goToSelf(TopNavigationBar.java:38)\n\tat com.bookit.step_definitions.MyInfoStepDefs.user_is_on_the_my_self_page(MyInfoStepDefs.java:43)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"my\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Fths-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:42c:154c:f5fd:b053%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.4\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/4t/w7h5k1zj39g...}, goog:chromeOptions: {debuggerAddress: localhost:62725}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3b2ff1b4fc2bcbbedd37d72b401b4d0b\n*** Element info: {Using\u003dlink text, value\u003dmy}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.getWrappedElement(Unknown Source)\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:204)\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:155)\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\n\t... 64 more\n",
  "status": "failed"
});
formatter.step({
  "name": "I logged Bookit api using \"wdanglz@yahoo.com\" and \"winfielddangl\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.i_logged_Bookit_api_using_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I get the current user information from api",
  "keyword": "And "
});
formatter.match({
  "location": "ApiStepDefs.i_get_the_current_user_information_from_api()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "UI,API and Database user information must be match",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDefs.ui_API_and_Database_user_information_must_be_match()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});