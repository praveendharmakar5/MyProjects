package com.shuftiproproject.task.model;

import java.util.ArrayList;

import org.json.JSONObject;

public class Address {
	
		
	private ArrayList<String> supported_types;
	
	private ArrayList<String> name;
	
	private String issue_date;
	
	private String full_address;
	
	private String address_fuzzy_match;
	
	
	public ArrayList<String> getSupported_types() {
		return supported_types;
	}
	public void setSupported_types(ArrayList<String> supported_types) {
		this.supported_types = supported_types;
	}
	
	public ArrayList<String> getName() {
		return name;
	}
	public void setName(ArrayList<String> name) {
		this.name = name;
	}
	public String getIssue_date() {
		return issue_date;
	}
	public void setIssue_date(String issue_date) {
		this.issue_date = issue_date;
	}
	public String getFull_address() {
		return full_address;
	}
	public void setFull_address(String full_address) {
		this.full_address = full_address;
	}
	public String getAddress_fuzzy_match() {
		return address_fuzzy_match;
	}
	public void setAddress_fuzzy_match(String address_fuzzy_match) {
		this.address_fuzzy_match = address_fuzzy_match;
	}
	
	@Override
	public String toString() {
		return "Address [supported_types=" + supported_types + ", name=" + name + ", issue_date=" + issue_date
				+ ", full_address=" + full_address + ", address_fuzzy_match=" + address_fuzzy_match + "]";
	}
	
	public static void main(String[] args) {
		String json = "{reference=RequestId700, event=request.pending, verification_url=https://app.shuftipro.com/process/kyc/AznngcaXGJ8s0ZAwgrJq7vsLYKkyYnZW1WHwcSwFgqMTaXqxqT0ffVNJNnKa11KI, email=praveendharmakar08@gmail.com, country=IN}";
		JSONObject jsonObject = new JSONObject(json);
		System.out.println(jsonObject.get("reference"));
		
	}
	
	
	

}
