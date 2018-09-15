package com.mushroom.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mushroom.pojo.Mm_users;

public interface UserDao {
	/**
	 * 根据用户id删除一个用户
	 * */
	int deleteByPrimaryKey(Integer uid); //ok
/**
 * 非if判断    添加一个新用户
 * */
    int insert(Mm_users record); //ok

    /**
     * if判断  添加一个新用户
     * */
    int insertSelective(Mm_users muser); //ok
	/***
	 * 暂时实现普通登录 web/jsp/login.html
	 */
Mm_users userLogin(Mm_users muser);//OK

	/**
	 * 根据用户id查询用户信息
	 * 
	 * @param uId
	 * @return
	 */
	Mm_users selectByPrimaryKey(Integer uid);//OK

	/**
	 * 通过 QQ 返回int类型 查询用户信息
	 * 
	 * @param userId
	 * @return
	 */
	int selectQID(String userQQ);//ok

	/**
	 * 通过 QQ 返回用户对象 查询用户信息
	 * 
	 * @param userId
	 * @return
	 */
	Mm_users userQid(String userQQ);//ok

	/**
	 * 查询用户所有的信息
	 * 
	 */
	List<Mm_users> selectKey();//ok

	/**
	 * 根据用户名查询用户
	 */
	Mm_users selectByName(String name);//ok

	/**
	 * if更新 如果为空 不更新 根据用户id
	 */
	int updateByPrimaryKeySelective(Mm_users muser);//ok

	/**
	 * 根据用户id进行更新
	 */
	int updateByPrimaryKeyWithBLOBs(Mm_users muser);//ok

	/**
	 * 根据用户id进行更新
	 */
	int updateByPrimaryKey(Mm_users muser);//ok

	/**
	 * 根据用户名和电话号码查询
	 * 
	 */
	Mm_users selectByParam(Mm_users muser);//ok

	/**
	 * 根据 qq修改 用户信息
	 */
	int updateUserByOpenID(@Param("muser")Mm_users muser);
	
	/**
	 * 根据用户id查找当前密码
	 * */
	Mm_users  Veri_now_password(int uid);

}
