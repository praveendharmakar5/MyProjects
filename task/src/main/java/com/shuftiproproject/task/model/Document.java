package com.shuftiproproject.task.model;

import java.util.ArrayList;

public class Document {
	
	private ArrayList<String> supported_types;
	
	private ArrayList<String> name;
	
	private String dob;
	
	private String issue_date;
	
	private String expiry_date;
	
	private String document_number;

	
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

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getIssue_date() {
		return issue_date;
	}

	public void setIssue_date(String issue_date) {
		this.issue_date = issue_date;
	}

	public String getExpiry_date() {
		return expiry_date;
	}

	public void setExpiry_date(String expiry_date) {
		this.expiry_date = expiry_date;
	}

	public String getDocument_number() {
		return document_number;
	}

	public void setDocument_number(String document_number) {
		this.document_number = document_number;
	}

	@Override
	public String toString() {
		return "Document [supported_types=" + supported_types + ", name=" + name + ", dob=" + dob + ", issue_date="
				+ issue_date + ", expiry_date=" + expiry_date + ", document_number=" + document_number + "]";
	}

	
	

}
