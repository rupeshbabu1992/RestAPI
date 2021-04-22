package stepDefinitions;

import cucumber.api.java.Before;

public class Hooks {
	
	@Before("@DeletePlace")
	public void beforeScenario() throws Throwable {
		StepDefinition sd = new StepDefinition();
		
		if(sd.place_id==null) {
		
		sd.add_Place_Payload_with("rupesh", "Spanish", "Fortune enclave");
		sd.user_calls_with_http_request("AddPlaceAPI", "POST");
		sd.verify_place_Id_created_maps_to_using("rupesh", "POST");
	}
	}
}
