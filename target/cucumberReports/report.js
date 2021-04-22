$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("placeValidations.feature");
formatter.feature({
  "line": 1,
  "name": "Validating place API",
  "description": "",
  "id": "validating-place-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify if place is being sucessfully added using AddPlaceAPI",
  "description": "",
  "id": "validating-place-api;verify-if-place-is-being-sucessfully-added-using-addplaceapi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddPlace"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Add Place Payload with \"\u003cname\u003e\" \"\u003clanguage\u003e\" \"\u003caddress\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user calls \"AddPlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the API call is sucess with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify place_Id created maps to \"\u003cname\u003e\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validating-place-api;verify-if-place-is-being-sucessfully-added-using-addplaceapi;",
  "rows": [
    {
      "cells": [
        "name",
        "language",
        "address"
      ],
      "line": 13,
      "id": "validating-place-api;verify-if-place-is-being-sucessfully-added-using-addplaceapi;;1"
    },
    {
      "cells": [
        "Golden Majesty",
        "English",
        "Nehru St"
      ],
      "line": 14,
      "id": "validating-place-api;verify-if-place-is-being-sucessfully-added-using-addplaceapi;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Verify if place is being sucessfully added using AddPlaceAPI",
  "description": "",
  "id": "validating-place-api;verify-if-place-is-being-sucessfully-added-using-addplaceapi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddPlace"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Add Place Payload with \"Golden Majesty\" \"English\" \"Nehru St\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user calls \"AddPlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the API call is sucess with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify place_Id created maps to \"Golden Majesty\" using \"getPlaceAPI\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Golden Majesty",
      "offset": 24
    },
    {
      "val": "English",
      "offset": 41
    },
    {
      "val": "Nehru St",
      "offset": 51
    }
  ],
  "location": "StepDefinition.add_Place_Payload_with(String,String,String)"
});
formatter.result({
  "duration": 4000501500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddPlaceAPI",
      "offset": 12
    },
    {
      "val": "POST",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_calls_with_http_request(String,String)"
});
formatter.result({
  "duration": 3483842000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "StepDefinition.the_API_call_is_sucess_with_status_code(int)"
});
formatter.result({
  "duration": 24380600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "status",
      "offset": 1
    },
    {
      "val": "OK",
      "offset": 30
    }
  ],
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 1985225100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scope",
      "offset": 1
    },
    {
      "val": "APP",
      "offset": 29
    }
  ],
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 30825200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golden Majesty",
      "offset": 33
    },
    {
      "val": "getPlaceAPI",
      "offset": 56
    }
  ],
  "location": "StepDefinition.verify_place_Id_created_maps_to_using(String,String)"
});
formatter.result({
  "duration": 2833096800,
  "status": "passed"
});
formatter.before({
  "duration": 258900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#  |Golden Hive    |French  |Raju St |"
    }
  ],
  "line": 18,
  "name": "Verify if delete place functionality is working",
  "description": "",
  "id": "validating-place-api;verify-if-delete-place-functionality-is-working",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@DeletePlace"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "DeletePlace Payload",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user calls \"deletePlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the API call is sucess with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.deleteplace_Payload()"
});
formatter.result({
  "duration": 5004600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deletePlaceAPI",
      "offset": 12
    },
    {
      "val": "POST",
      "offset": 34
    }
  ],
  "location": "StepDefinition.user_calls_with_http_request(String,String)"
});
formatter.result({
  "duration": 2180345600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "StepDefinition.the_API_call_is_sucess_with_status_code(int)"
});
formatter.result({
  "duration": 242300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "status",
      "offset": 1
    },
    {
      "val": "OK",
      "offset": 30
    }
  ],
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 35273500,
  "status": "passed"
});
});