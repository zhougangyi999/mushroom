package com.mushroom.pojo;

import java.io.Serializable;
import java.util.Date;

public class Mm_users implements Serializable {
    private Integer uid;

    private String username;

    private String password;

    private String phone;

    private String email;

    private String identitycard;

    private String userqq;

    private Integer sex;

    private Date birthday;

    private String profession;

    private Integer status;

    private Date creationtime;

    private Date certificationdate;

    private Double withdrawaloffunds;

    private Double merchantdeposit;

    private Double securedfunds;

    private Double availablecapital;

    private Double payforaredenvelope;

    private String headportraitsrc;

    private String reserved1;

    private String reserved2;

    private String reserved3;

    private String reserved4;

    private String reserved5;

    private String reserved6;

    private String presentation;

    private static final long serialVersionUID = 1L;

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getIdentitycard() {
        return identitycard;
    }

    public void setIdentitycard(String identitycard) {
        this.identitycard = identitycard == null ? null : identitycard.trim();
    }

    public String getUserqq() {
        return userqq;
    }

    public void setUserqq(String userqq) {
        this.userqq = userqq == null ? null : userqq.trim();
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession == null ? null : profession.trim();
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getCreationtime() {
        return creationtime;
    }

    public void setCreationtime(Date creationtime) {
        this.creationtime = creationtime;
    }

    public Date getCertificationdate() {
        return certificationdate;
    }

    public void setCertificationdate(Date certificationdate) {
        this.certificationdate = certificationdate;
    }

    public Double getWithdrawaloffunds() {
        return withdrawaloffunds;
    }

    public void setWithdrawaloffunds(Double withdrawaloffunds) {
        this.withdrawaloffunds = withdrawaloffunds;
    }

    public Double getMerchantdeposit() {
        return merchantdeposit;
    }

    public void setMerchantdeposit(Double merchantdeposit) {
        this.merchantdeposit = merchantdeposit;
    }

    public Double getSecuredfunds() {
        return securedfunds;
    }

    public void setSecuredfunds(Double securedfunds) {
        this.securedfunds = securedfunds;
    }

    public Double getAvailablecapital() {
        return availablecapital;
    }

    public void setAvailablecapital(Double availablecapital) {
        this.availablecapital = availablecapital;
    }

    public Double getPayforaredenvelope() {
        return payforaredenvelope;
    }

    public void setPayforaredenvelope(Double payforaredenvelope) {
        this.payforaredenvelope = payforaredenvelope;
    }

    public String getHeadportraitsrc() {
        return headportraitsrc;
    }

    public void setHeadportraitsrc(String headportraitsrc) {
        this.headportraitsrc = headportraitsrc == null ? null : headportraitsrc.trim();
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

    public String getReserved3() {
        return reserved3;
    }

    public void setReserved3(String reserved3) {
        this.reserved3 = reserved3 == null ? null : reserved3.trim();
    }

    public String getReserved4() {
        return reserved4;
    }

    public void setReserved4(String reserved4) {
        this.reserved4 = reserved4 == null ? null : reserved4.trim();
    }

    public String getReserved5() {
        return reserved5;
    }

    public void setReserved5(String reserved5) {
        this.reserved5 = reserved5 == null ? null : reserved5.trim();
    }

    public String getReserved6() {
        return reserved6;
    }

    public void setReserved6(String reserved6) {
        this.reserved6 = reserved6 == null ? null : reserved6.trim();
    }

    public String getPresentation() {
        return presentation;
    }

    public void setPresentation(String presentation) {
        this.presentation = presentation == null ? null : presentation.trim();
    }
}