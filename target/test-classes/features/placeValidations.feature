Feature: Validating place API 

@AddPlace @Regression
Scenario Outline: Verify if place is being sucessfully added using AddPlaceAPI 
	Given Add Place Payload with "<name>" "<language>" "<address>" 
	When user calls "AddPlaceAPI" with "POST" http request 
	Then the API call is sucess with status code 200 
	And "status" in response body is "OK" 
	And "scope" in response body is "APP" 
	And verify place_Id created maps to "<name>" using "getPlaceAPI" 
	
	Examples: 
		|name           |language|address |
		|Golden Majesty |English |Nehru St|
		#  |Golden Hive    |French  |Raju St |
		
@DeletePlace @Regression
Scenario: Verify if delete place functionality is working 
	Given DeletePlace Payload 
	When user calls "deletePlaceAPI" with "POST" http request 
	Then the API call is sucess with status code 200 
	And "status" in response body is "OK" 

@AddBook			
Scenario: Verify the ID using Hashmap 
	Given details of the library API 
	When user calls "AddPlaceAPI" with "POST" http request 
	Then the API call is sucess with status code 200
	
@AddExcel
 Scenario: Verify the ID using Excel Datas 
	Given details of the excel data
	When user calls "AddPlaceAPI" with "POST" http request 
	Then the API call is sucess with status code 200
 