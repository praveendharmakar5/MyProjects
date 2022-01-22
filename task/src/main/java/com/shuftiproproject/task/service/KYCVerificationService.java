package com.shuftiproproject.task.service;

import java.util.Map;
import java.util.Random;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.shuftiproproject.task.model.KYCResponseModel;
import com.shuftiproproject.task.model.KYCVerficationModel;

@Service
public class KYCVerificationService {
	 
	@Value("${shuftipro_ClientId}")
	private String clientId;
	
	@Value("${shuftipro_ClientSecret}")
	private String clientSecret;
	
	public String baseURL = "https://api.shuftipro.com/" ;
	
	
	public KYCResponseModel kycVerification(KYCVerficationModel model) {
		
		Random rand = new Random();
		model.setReference("RequestId"+rand.nextInt(1000));
		
		RestTemplate resttempalte = new RestTemplate();
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setBasicAuth(clientId, clientSecret);
		
		HttpEntity<Map<String, Object>> entity = new HttpEntity(model , headers);
		ResponseEntity<KYCResponseModel> response = resttempalte.exchange(baseURL, HttpMethod.POST,entity, KYCResponseModel.class);
		return response.getBody();
		
	}
	
	
	private String generateAccessToken() {
		
		String url = "https://api.shuftipro.com/get/access/token";
		
		RestTemplate resttempalte = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setBasicAuth(clientId, clientSecret);
		HttpEntity<Map<String, Object>> entity = new HttpEntity(headers);
		ResponseEntity<String> response = resttempalte.exchange(url, HttpMethod.POST,entity, String.class);

		JSONObject object = new JSONObject(response.getBody());
		
		return object.getString("access_token");
		
	}

}
