---
order: 2
next: 03_Configuration.md
title: Account Permissions
shortTitle: 1. Account Permissions
author: Jason Kerbelis
headerDepth: 2
---

## Account Permissions

TIR has two types of users, Administrators and Users. Administrators have access to the **Administration,** **Libraries**, and **Boundary** tabs. Users only have access to Libraries and Boundary tabs. TIR is setup as a hierarchical system with Companies and Boundaries. Users can be granted permissions to be Owners, Reviewers, and Editors for
Companies and Boundaries. A summary of permissions is show in Table 1, below.

![Table 1: Access Control – User Permissions](../src/assets/admin-guide/image1.png "Table 1: Access Control – User Permissions")

### Changing Company and Boundary Permissions

To add or modify Company and Boundary permissions, select the 3 buttons to the far right of the Company or Boundary and select Manage Members.

![Figure 1: Modify Company/Boundary Permissions](./assets/admin-guide/ModifyCompanyPermissions.png "Figure 1: Modify Company/Boundary Permissions")

#### Adding Users

Clicking the **Manage Members** will display the Members dialog box, enter the username in the **Search Users** box.

![Figure 2: Adding Members – Search Users](./assets/admin-guide/ModifyCompanyPermissions2.png "Figure 2: Adding Members – Search Users")

The Search Users box should provide a list of similar usernames. Select the user account you wish to add. Once selected click the down arrow next to Co-Owner and select the level of permission you wish to grant.

![Figure 3: Manage Members – Choose level of Access](./assets/admin-guide/ModifyCompanyPermissions3.png "Figure 3: Manage Members – Choose level of Access")

Once the level of access you wish to grant is selected, click **Add Member**. You will see the account added to the user permissions list for the applicable company/boundary.

![Figure 4: Member Access – User Added with Co-owner Role](./assets/admin-guide/ModifyCompanyPermissions4.png "Figure 4: Member Access – User Added with Co-owner Role")

Member access can be edited or removed from this view as well. This process is the same for both Companies and Boundaries.

#### Editing User Permissions

Clicking the **Manage Members** will display the Members dialog box. Click the **Edit** button next to the user you wish change permissions for.

![Figure 5: Edit User Permissions](./assets/admin-guide/EditUserPermissions.png "Figure 5: Edit User Permissions")

This will enable the drop-down menu for the role field. To change the user's role, select the new role and click the **Save** button for that user. There is one limitation when editing roles, and that is that each boundary needs to have an Owner. If you are changing the role of user from Owner to Editor, you will first need to assign another user the Owner role.

![Figure 6: Edit User Role](./assets/admin-guide/EditUserPermissions2.png "Figure 6: Edit User Role")

To remove a user, click the **Remove** button for that user. Owners can not be removed. If you wish to remove an owner from a Company or Boundary you must first grant another user the Owner role.

![Figure 7: Remove User](./assets/admin-guide/RemoveUser.png "Figure 7: Remove User")
