package com.shuftiproproject.task.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shuftiproproject.task.service.AMLBackgroundChecksService;

@RestController
@RequestMapping("/AML")
public class AMLTestController {
	
	@Autowired
	AMLBackgroundChecksService amlBackgroundChecksService;
	
	@PostMapping(value="/individuals")
	public void amlCheckForIndividuals() {
		
	}
	
	@PostMapping(value="/business")
    public void amlCheckForBusiness() {
		
	}
	

}
