package com.shuftiproproject.task.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shuftiproproject.task.model.KYCResponseModel;
import com.shuftiproproject.task.model.KYCVerficationModel;
import com.shuftiproproject.task.service.KYCVerificationService;

@RestController
@RequestMapping("/KYC")
public class KYCTestController {
	
	@Autowired
	KYCVerificationService kycVerificationService ;
	
	@PostMapping(value="/kycVerification")
	public ResponseEntity<KYCResponseModel> generateToken(@RequestBody KYCVerficationModel request) {
		KYCResponseModel response = kycVerificationService.kycVerification(request);
		return ResponseEntity.ok(response);
	} 
	
	

}
