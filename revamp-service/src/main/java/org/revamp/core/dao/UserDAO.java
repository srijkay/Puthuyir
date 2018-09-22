package org.revamp.core.dao;

import org.revamp.core.model.User;

public interface UserDAO {

	long save(User user);

	User get(long id);

}
