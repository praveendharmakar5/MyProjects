package com.shuftiproproject.task.model;

public class KYCResponseModel {
	
	private String reference;
	
	private String event;
	
	private String verification_url;
	
	private String email;
	
	private String country;

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
	}

	public String getEvent() {
		return event;
	}

	public void setEvent(String event) {
		this.event = event;
	}

	public String getVerification_url() {
		return verification_url;
	}

	public void setVerification_url(String verification_url) {
		this.verification_url = verification_url;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return "KYCResponseModel [reference=" + reference + ", event=" + event + ", verification_url="
				+ verification_url + ", email=" + email + ", country=" + country + "]";
	}
	
}
