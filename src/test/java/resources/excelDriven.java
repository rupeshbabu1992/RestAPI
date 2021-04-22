package resources;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.path.xml.XmlPath;
import io.restassured.response.Response;

import static org.hamcrest.Matchers.equalTo;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
public class excelDriven {

	
	@Test
	public void addBook() throws IOException
	{
		dataDriven d=new dataDriven();
		ArrayList data=d.getData("RestAddbook","RestAssured");
		
		
		HashMap<String, Object>  hm = new HashMap<>();
		hm.put("accuracy", data.get(1));
		hm.put("name", data.get(2));
		hm.put("phone_number", data.get(3));
		hm.put("address", data.get(4));
		hm.put("website", data.get(5));
		hm.put("language", data.get(6));
		hm.put("author", data.get(7));
		HashMap<String, Object> hm1 = new HashMap<String, Object>();
		hm1.put("lat", data.get(8));
		hm1.put("lng", data.get(9));
		hm.put("location", hm1);
		
	/*	HashMap<String, Object>  map2 = new HashMap<>();
		map.put("lat", "12");
		map.put("lng", "34");
		map.put("location", map2);*/
		
		
		RestAssured.baseURI="http://216.10.245.166";
		Response resp=given().
				header("Content-Type","application/json").
		body(hm).
		when().
		post("/Library/Addbook.php").
		then().assertThat().statusCode(200).
		extract().response();
		 JsonPath js= ReusableMethods.rawToJson(resp);
		   String id=js.get("ID");
		   System.out.println(id);
		

	}
	
	public static String GenerateStringFromResource(String path) throws IOException {

	    return new String(Files.readAllBytes(Paths.get(path)));

	}
}
