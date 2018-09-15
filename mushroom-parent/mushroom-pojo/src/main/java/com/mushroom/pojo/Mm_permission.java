package com.mushroom.pojo;



public class Mm_permission {
	 private int id;
	    private String token;
	    /**资源url**/
	    private String url;
	    /**权限说明**/
	    private String description;
	    /**所属角色编号**/
	    private int roleid;

	    public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }

	    public String getToken() {
	        return token;
	    }

	    public void setToken(String token) {
	        this.token = token;
	    }

	    public String getUrl() {
	        return url;
	    }

	    public void setUrl(String url) {
	        this.url = url;
	    }

	    public String getDescription() {
	        return description;
	    }

	    public void setDescription(String description) {
	        this.description = description;
	    }

	    	

	    public int getRoleid() {
			return roleid;
		}

		public void setRoleid(int roleid) {
			this.roleid = roleid;
		}

		@Override
	    public String toString() {
	        return "PermissionPojo{" +
	                "id=" + id +
	                ", token='" + token + '\'' +
	                ", url='" + url + '\'' +
	                ", description='" + description + '\'' +
	                ", roleId=" + roleid +
	                '}';
	    }

}
