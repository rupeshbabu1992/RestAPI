$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("placeValidations.feature");
formatter.feature({
  "line": 1,
  "name": "Validating place API",
  "description": "",
  "id": "validating-place-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify if place is being sucessfully added using AddPlaceAPI",
  "description": "",
  "id": "validating-place-api;verify-if-place-is-being-sucessfully-added-using-addplaceapi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add Place Payload with \"\u003cname\u003e\" \"\u003clanguage\u003e\" \"\u003caddress\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user calls \"AddPlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the API call is sucess with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify place_Id created maps to \"\u003cname\u003e\" using \"getPlaceAPI\"",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
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
      "line": 12,
      "id": "validating-place-api;verify-if-place-is-being-sucessfully-added-using-addplaceapi;;1"
    },
    {
      "cells": [
        "Golden Majesty",
        "English",
        "Nehru St"
      ],
      "line": 13,
      "id": "validating-place-api;verify-if-place-is-being-sucessfully-added-using-addplaceapi;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify if place is being sucessfully added using AddPlaceAPI",
  "description": "",
  "id": "validating-place-api;verify-if-place-is-being-sucessfully-added-using-addplaceapi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Add Place Payload with \"Golden Majesty\" \"English\" \"Nehru St\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user calls \"AddPlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the API call is sucess with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
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
  "duration": 1986419800,
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
  "duration": 1599730900,
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
  "duration": 3198300,
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
  "duration": 586376700,
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
  "duration": 18201700,
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
  "duration": 2244921800,
  "status": "passed"
});
});