package com.mushroom.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mushroom.dao.UserDao;
import com.mushroom.pojo.Mm_users;
import com.mushroom.service.UserService;

/**
 * 个人中心 实现类
 *
 */
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Override
	public Mm_users userLogin(Mm_users muser) {
		System.out.println("逻辑层");
		return userDao.userLogin(muser);
	}

	/**
	 * 根据id查询 用户所有的信息
	 */
	@Override
	public Mm_users selectUser(int uid) {
		Mm_users muser = userDao.selectByPrimaryKey(uid);
		return muser;
	}

	/**
	 * 根据 id 修改 用户信息
	 */
	@Override
	public int updateUser(Mm_users muser) {
	
		return userDao.updateByPrimaryKeySelective(muser);
	}

	/**
	 * 查询用户所有的信息
	 */
	public List<Mm_users> selectKey() {
		// TODO Auto-generated method stub
		return userDao.selectKey();
	}

	/**
	 * 添加用户
	 */
	@Override
	public int insertSelective(Mm_users user) {
		// TODO Auto-generated method stub
		return userDao.insertSelective(user);
	}

	/**
	 * 根据qq查询是否存在
	 * 
	 */
	@Override
	public int selectQID(String userQQ) {
		// TODO Auto-generated method stub
		return userDao.selectQID(userQQ);
	}

	/**
	 * 根据qq查询
	 */
	@Override
	public Mm_users userQid(String userQQ) {
		// TODO Auto-generated method stub
		return userDao.userQid(userQQ);
	}

	/**
	 * 根据用户名查询
	 */
	@Override
	public Mm_users selectByName(String username) {
		// TODO Auto-generated method stub
		return userDao.selectByName(username);
	}

	/**
	 * 根据用户名和电话号码查询
	 */
	@Override
	public Mm_users selectByParam(Mm_users muser) {
		// TODO Auto-generated method stub
		return userDao.selectByParam(muser);
	}

	/**
	 * 根据 qq修改 用户信息
	 */
	@Override
	public boolean updateUserByOpenID(Mm_users muser) {
		// TODO Auto-generated method stub
		return userDao.updateUserByOpenID(muser) > 0;
	}

	/**
	 * 根据用户id删除一个用户
	 */
	@Override
	public int deleteByPrimaryKey(Integer uid) {
		// TODO Auto-generated method stub
		return userDao.deleteByPrimaryKey(uid);
	}

	/**
	 * 非if判断 添加一个新用户
	 */
	@Override
	public int insert(Mm_users muser) {
		// TODO Auto-generated method stub
		return userDao.insert(muser);
	}

	@Override
	public Mm_users Veri_now_password(int uid) {
		// TODO Auto-generated method stub
		return userDao.Veri_now_password(uid);
	}

}
