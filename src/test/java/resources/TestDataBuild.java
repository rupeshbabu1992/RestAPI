package resources;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import pojo.AddPlace;
import pojo.Location;

public class TestDataBuild {

	public AddPlace addPlacePayLoad(String name, String language, String address) {

		AddPlace place = new AddPlace();
		place.setAccuracy(50);
		place.setAddress(address);
		place.setLanguage(language);
		place.setPhone_number("+91-9962774717");
		place.setWebsite("https://google.com");
		place.setName(name);
		List<String> myList = new ArrayList<String>();
		myList.add("Shoe Park");
		myList.add("Shop");
		place.setTypes(myList);

		Location loc = new Location();
		loc.setLat(-38.383494);
		loc.setLng(33.427362);
		place.setLocation(loc);
		return place;
	}
	public String deletePlacePayload(String place_id) {
		return "{\r\n    \"place_id\": \""+place_id+"\"\r\n}";
	}
	
	public HashMap<String, Object> addBook() {
		HashMap<String, Object> hm = new HashMap<String, Object>();
		hm.put("accuracy", "50");
		hm.put("name", "rupesh");
		hm.put("phone_number", "9962774717");
		hm.put("address", "No: 21, Majest APT");
		hm.put("website", "www.google.com");
		hm.put("language", "Spanish");
		hm.put("author", "lokesh");
		HashMap<String, Object> hm1 = new HashMap<String, Object>();
		hm1.put("lat", "1234567");
		hm1.put("lng", "7654321");
		hm.put("location", hm1);
		return hm;
	}
}
