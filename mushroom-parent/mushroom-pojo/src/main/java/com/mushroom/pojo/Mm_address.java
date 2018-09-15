package com.mushroom.pojo;

import java.io.Serializable;

/**
 * @author Administrator
 *2018年9月4日00:10:17  新增字段/**省*/	/**市*//**街*
 *zgy更改
 */
public class Mm_address implements Serializable {
	/**省*/
	private String provincename;
	/**市*/
	private String cityname;
	/**街*/
	private String districtname;
    public String getProvincename() {
		return provincename;
	}

	public void setProvincename(String provincename) {
		this.provincename = provincename;
	}

	public String getCityname() {
		return cityname;
	}

	public void setCityname(String cityname) {
		this.cityname = cityname;
	}

	public String getDistrictname() {
		return districtname;
	}

	public void setDistrictname(String districtname) {
		this.districtname = districtname;
	}

	private Integer addressid;

    private Integer province;

    private Integer city;

    private Integer district;

    private String address;

    private Integer userid;

    private Integer iddefaultTake;

    private Integer isSalesReturn;

    private String postalcode;

    private String collectname;

    private Integer types;

    private String collectphone;

    private String reserved1;

    private String reserved2;

    private static final long serialVersionUID = 1L;

    public Integer getAddressid() {
        return addressid;
    }

    public void setAddressid(Integer addressid) {
        this.addressid = addressid;
    }

    public Integer getProvince() {
        return province;
    }

    public void setProvince(Integer province) {
        this.province = province;
    }

    public Integer getCity() {
        return city;
    }

    public void setCity(Integer city) {
        this.city = city;
    }

    public Integer getDistrict() {
        return district;
    }

    public void setDistrict(Integer district) {
        this.district = district;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getIddefaultTake() {
        return iddefaultTake;
    }

    public void setIddefaultTake(Integer iddefaultTake) {
        this.iddefaultTake = iddefaultTake;
    }

    public Integer getIsSalesReturn() {
        return isSalesReturn;
    }

    public void setIsSalesReturn(Integer isSalesReturn) {
        this.isSalesReturn = isSalesReturn;
    }

    public String getPostalcode() {
        return postalcode;
    }

    public void setPostalcode(String postalcode) {
        this.postalcode = postalcode == null ? null : postalcode.trim();
    }

    public String getCollectname() {
        return collectname;
    }

    public void setCollectname(String collectname) {
        this.collectname = collectname == null ? null : collectname.trim();
    }

    public Integer getTypes() {
        return types;
    }

    public void setTypes(Integer types) {
        this.types = types;
    }

    public String getCollectphone() {
        return collectphone;
    }

    public void setCollectphone(String collectphone) {
        this.collectphone = collectphone == null ? null : collectphone.trim();
    }

    public String getReserved1() {
        return reserved1;
    }

    public void setReserved1(String reserved1) {
        this.reserved1 = reserved1 == null ? null : reserved1.trim();
    }

    public String getReserved2() {
        return reserved2;
    }

    public void setReserved2(String reserved2) {
        this.reserved2 = reserved2 == null ? null : reserved2.trim();
    }
}