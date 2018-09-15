package com.mushroom.service;

import java.util.List;

import com.mushroom.pojo.Mm_users;

public interface UserService {
	/**
	 * 测试登录
	 */
	public Mm_users userLogin(Mm_users mm);

	/**
	 * 根据id查询 用户所有的信息
	 */
	Mm_users selectUser(int uid);

	/**
	 * 根据 id 修改 用户信息
	 */
	int updateUser(Mm_users user);

	/**
	 * 查询用户所有的信息
	 */
	List<Mm_users> selectKey();

	/**
	 * 添加用户
	 */
	int insertSelective(Mm_users user);

	/**
	 * 根据qq查询是否存在
	 */
	int selectQID(String userQQ);

	/**
	 * 根据qq查询
	 */
	Mm_users userQid(String userQQ);

	/**
	 * 根据用户名查询
	 */
	Mm_users selectByName(String username);

	/**
	 * 根据用户名和电话号码查询
	 */
	Mm_users selectByParam(Mm_users user);

	/**
	 * 根据 qq修改 用户信息
	 */
	boolean updateUserByOpenID(Mm_users user);

	/**
	 * 根据用户id删除一个用户
	 */
	int deleteByPrimaryKey(Integer uid);

	/**
	 * 非if判断 添加一个新用户
	 */
	int insert(Mm_users record);
	/**
	 * 根据用户id查找当前密码
	 * */
	Mm_users  Veri_now_password(int uid);

}
