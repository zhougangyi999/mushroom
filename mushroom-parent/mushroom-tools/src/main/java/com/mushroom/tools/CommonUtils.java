package com.mushroom.tools;

public class CommonUtils {

	public static String getCode() {
		Integer num = ((int) (Math.random() * 900000)) + 100000;
		return num.toString();
	}

}
