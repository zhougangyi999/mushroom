package test;

import org.springframework.beans.factory.annotation.Autowired;

import com.mushroom.service.impl.UserServiceImpl;
import com.mushroom.tools.IndustrySMS;
import com.mushroom.tools.SecurityUtils;
import com.mushroom.tools.Sendsms;

public class demo {

	/*@SuppressWarnings("static-access")
	public static void main(String[] args) {
		// TODO Auto-generated method stub
String password="ccf73383836dc3f9c926a45671aabfa4";
SecurityUtils su=new SecurityUtils();
String as=su.md5Hex3(password);
System.out.println(as);
	}*/
	@Autowired
	private UserServiceImpl usimpl;
public static void main(String[] args) {
IndustrySMS as=new IndustrySMS();
	as.execute("17608462497", "666666");
	//Sendsms sms=new Sendsms();
	//sms.goPhone("17608462497", "341589");
}
}
