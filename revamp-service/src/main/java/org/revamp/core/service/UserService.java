package org.revamp.core.service;

import org.revamp.core.model.User;

public interface UserService {

	long save(User user);

	User get(long id);

}
