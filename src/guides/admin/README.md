---
order: 1
title: Test Ingest Repository (TIR) Privileged User Guide
shortTitle: Test Ingest Repository (TIR) Privileged User Guide
headerDepth: 3
---

# Purpose

The purpose of this document is to provide a guide for Administrative
functions for Test Ingest Repository (TIR). TIR is a MITRE Security
Assessment Framework (SAF) tool that is used to support boundary and
software compliance and continuous monitoring.

TIR Administrators only have access to certain features in the software.
Administrators can configure TIR, and change permissions on Companies
and Boundaries. Administrators cannot edit boundary details. This helps
maintain required separation of roles and responsibilities within the
TIR.

# Account Permissions

TIR has two types of users, Administrators and Users. Administrators
have access to the **Administration,** **Libraries**, and **Boundary**
tabs. Users only have access to Libraries and Boundary tabs. TIR is
setup as a hierarchical system with Companies and Boundaries. Users can
be granted permissions to be Owners, Reviewers, and Editors for
Companies and Boundaries. A summary of permissions is show in Table 1,
below.

<img src="/assets/admin-guide/image1.png"
style="width:5.41685in;height:2.35425in" />

# Configuration

## Administrator Login

The default Local Administrator Username is admin@tir.local. The initial
password will be provided. Enter your admin@tir.local and the initial
**Password**, then review the **IS User Agreement** and acknowledge that
you have read it by clicking the check box. Then, click **Sign in**.

<img src="/assets/admin-guide/image2.png"
style="width:3.4621in;height:2.99749in" />

-   After successfully logging in for the first time, please change the
    TIR Admin password by completing the following:

-   Click the Profile Icon in the upper right corner of the welcome
    screen.

<img src="/assets/admin-guide/image3.png"
style="width:6.5in;height:2.44514in" />

-   Click Your **Profile** to bring up the TIR Admin profile.

<img src="/assets/admin-guide/image4.png"
style="width:4.66403in;height:2.82981in" />

-   In the **Password** row select **Change**

<img src="/assets/admin-guide/image5.png"
style="width:4.77808in;height:3.26656in" />

-   Enter **New password**

-   Enter **Confirm password**

-   Select Save

## Administrative Functions

The TIR Local Administrator account is allowed to perform a number of
configuration tasks, like creating local accounts, setting up LDAP,
uploading certificates, and configurating centralized Logging. These
functions are executed in the **Administration** Tab.

1.  **The Administration Tab**

The **Administration** tab is only available through Administrators. You
access the **Administration** tab by selecting **Administration** at the
top center of the web interface.

<img src="/assets/admin-guide/image6.png"
style="width:3.23721in;height:2.36877in" />

The four major **Administration** tab functions are configuration,
Notifications, Users, and Logs.

A view of the **Administration** tab is below:

<img src="/assets/admin-guide/image7.png"
style="width:3.17226in;height:2.34293in" />

#### Configuring LDAP

LDAP is configured during TIR deployment. Please see the TIR Deployment
Guide for LDAP configuration procedures.

#### Configuration

Within the **Configuration** section an Administrator can change
standard **Terminology** and import a **CA Certificate.**

<img src="/assets/admin-guide/image8.png"
style="width:3.94403in;height:2.00994in" />

##### Certificate Import and Verification

-   Click on the **CA Certificate** **Choose File** box to open a File
    dialog window and choose your signed x509 formatted .crt file and
    hit **Open** - the name of the file will appear in the **CA
    Certificate** Text Box

<img src="/assets/admin-guide/image9.png"
style="width:3.82994in;height:3in" />

<img src="/assets/admin-guide/image10.png"
style="width:3.99504in;height:3.12932in" />

-   Note name of .crt file shows up in text field.

<img src="/assets/admin-guide/image11.png"
style="width:4.31969in;height:3.38362in" />

-   Click on the **Site Certificate** Choose File box to open a File
    dialog window and choose your .pem formatted site key and hit Open -
    the name of the file will appear in the Site Certificate Text Box

<img src="/assets/admin-guide/image12.png"
style="width:4.18862in;height:3.28095in" />

<img src="/assets/admin-guide/image13.png"
style="width:4.57162in;height:3.58095in" />

<img src="/assets/admin-guide/image14.png"
style="width:4.64457in;height:3.63809in" />

-   Select **Import**

<img src="/assets/admin-guide/image14.png"
style="width:4.99057in;height:3.90912in" />

-   A modal window saying "Checking Certificates Please Wait... Circle"
    will appear while the files are being loaded.

<img src="/assets/admin-guide/image15.png"
style="width:4.45003in;height:3.48571in" />

-   A message underneath the Certificate Import form Text Fields will
    appear saying "Certificate Import Successful!" if the certs are
    accepted.

<img src="/assets/admin-guide/image16.png"
style="width:4.07103in;height:3.18884in" />

Notes:

-   The NGINX listener checks imported certificates for:

    -   A .pem formatted key file

    -   A x509 formatted .crt file

    -   Cert files matching modulus

    -   CRT Common Name matching NGINX\_HOST variable value

-   If invalid certificate files are loaded, an error will appear saying
    **Error in Cert Response** in the top right of the window

<img src="/assets/admin-guide/image17.png"
style="width:4.46984in;height:3.09317in" />

#### Notifications

Notifications are automatically generated at login for the following:

-   New STIG Library is available for applicable boundaries

-   POA&M Completion Dates coming due or overdue

-   Milestone Dates coming due or overdue

#### Users

The **User** functions allow an administrator to add local User or
Administrator accounts and change passwords.

<img src="/assets/admin-guide/image18.png"
style="width:4.90757in;height:2.19478in" />

##### Adding a local Account

To add a local account, select **Add Users**

<img src="/assets/admin-guide/image18.png"
style="width:4.98081in;height:2.22753in" />

This will bring up the **Add User** dialog Box. Complete the relevant
data, to include **First Name**, **Last Name**, **Email Address**
(username), set a unique password, and change the time zone.

<img src="/assets/admin-guide/image19.png"
style="width:4.08792in;height:2.95981in" />

##### Change User Password

To change a user’s password. Select the 3 buttons to the far right of
the user account and select Edit.

<img src="/assets/admin-guide/image20.png"
style="width:5.13895in;height:2.12915in" />

The **Edit User** dialog box will appear on the right side of the
screen. Enter a value for **New Password** and **Confirm Password** and
click **Save**.

<img src="/assets/admin-guide/image21.png"
style="width:1.80118in;height:6.80365in" />

##### Unlock Account

Unlock account feature is not currently available.

#### Logs

Centralized logging can be configured from the **Logs** function within
the Administration tab.

To setup logging, select **Logs** from the **Administration** tab menu.

<img src="/assets/admin-guide/image26.png"
style="width:5.76195in;height:3.66154in" />

-   **PATH** is the local logging path.

-   **Syslog Target** is the centralized log server, like Splunk.

-   **Port** is the port being used to forward logs

-   **Log Level** determines which logs will be forwarded to the
    centralized log server. The default setting of **Warning** should
    meet all required logging for SP 800-53 based authorizations.

-   Once properly configured select **Save**

## Libraries

The **Libraries** tab provides the ability to import new STIG libraries
and updated Control Correlation Identifiers (CCI) mappings for different
NIST SP 800-53 revisions.

1.  **STIG Libraries**

The Department of Defense (DoD) releases quarterly updates to the STIG
benchmarks. These quarterly updates are released as .zip files. Once
downloaded, the .zip files can be uploaded to TIR and made available to
all users.

#### View STIG Libraries 

Please navigate to the **Libraries** tab by clicking the **Libraries**
button at the top on the page.

Note: The **Libraries** tab will display all of the STIG libraries that
have been uploaded to your TIR instance.

<img src="/assets/admin-guide/image27.png"
style="width:6.5in;height:1.51111in" />

Once imported, the STIG libraries will follow a standardized naming
convention. The naming convention will follow this template:
**U\_SRG-STIG\_Library\_{year}\_{month}{revision}.zip**.

Please refer to the table below for more examples.

<table>
<caption><p>Table 1: Access Control – User Permissions</p></caption>
<colgroup>
<col style="width: 8%" />
<col style="width: 29%" />
<col style="width: 14%" />
<col style="width: 47%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Year</strong></th>
<th><strong>Release Quarter/ Month</strong></th>
<th><strong>Revision</strong></th>
<th><strong>Naming Convention</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>2022</td>
<td>Q1 / January (01)</td>
<td>v1</td>
<td>U_SRG-STIG_Library_2022_01v1.zip</td>
</tr>
<tr class="even">
<td>2022</td>
<td>Q2 / April (04)</td>
<td>v2</td>
<td>U_SRG-STIG_Library_2022_04v2.zip</td>
</tr>
<tr class="odd">
<td>2023</td>
<td>Q3 / July (07)</td>
<td>v1</td>
<td>U_SRG-STIG_Library_2023_07v1.zip</td>
</tr>
<tr class="even">
<td>2023</td>
<td>Q4 / October (10)</td>
<td>v2</td>
<td>U_SRG-STIG_Library_2023_10v2.zip</td>
</tr>
</tbody>
</table>

Table 1: Access Control – User Permissions

1.  **Import STIG Libraries**

To import a new STIG library, please navigate to the **Libraries** page
and click the **Import** button inside the **STIG Libraries** section,
as seen in Figure 14. For reference, this button can be found in the top
right of *Figur*e 14: STIG Libraries.

The **Import** button will open a file navigation window. Please
navigate to the .zip file containing the STIG Library and click
**Open**.

1.  **CCI Matrix**

CCI mappings are provided by NIST and updated as necessary. CCI mappings
different between SP 800-53 Rev 4 and Rev 5. Keeping this updated ensure
more granular mapping of STIGs to applicable CCIs.

<img src="/assets/admin-guide/image28.png"
style="width:6.5in;height:1.62361in" />

#### Import CCI Matrix Updates 

To import a new CCI Matrix, please navigate to the Libraries page and
click the **Import** button inside the CCI Matrix section. For
reference, this button can be found in the top right of Figure 6: CCI
Matrix.

1.  **Changing Boundary and/or Company Permissions**

    1.  **Modify Company Permissions**

To modify Company permissions select the 3 buttons to the far right of
the Company and select Manage Users.

<img src="/assets/admin-guide/image29.png"
style="width:5.0939in;height:2.68845in" />

-   Then the Members dialog box comes up, enter the username in the
    **Search Users** box.

<img src="/assets/admin-guide/image30.png"
style="width:4.85911in;height:2.09731in" />

-   The Search Users box should provide a list of similar usernames.
    Select the user account you wish to add.

-   Once selected click the down arrow next to Co-Owner and select the
    level of permission you wish to grant.

<img src="/assets/admin-guide/image31.png"
style="width:5.48201in;height:2.6104in" />

-   Once the level of access you wish to grant is selected, Click **Add
    Member**

-   You will see the account added to the user permissions list for the
    applicable company.

<img src="/assets/admin-guide/image32.png"
style="width:5.28126in;height:2.68916in" />

Member access can be edited or removed from this view as well.

1.  **Modify Boundary Permissions**

To modify Boundary permissions select the 3 buttons to the far right of
the Company and select Manage Users.

<img src="/assets/admin-guide/image33.png"
style="width:5.48769in;height:2.81186in" />

-   Then the Members dialog box comes up, enter the username in the
    **Search Users** box.

<img src="/assets/admin-guide/image34.png"
style="width:5.2146in;height:2.79616in" />

-   The Search Users box should provide a list of similar usernames.
    Select the user account you wish to add.

-   Once selected click the down arrow next to Co-Owner and select the
    level of permission you wish to grant.

<img src="/assets/admin-guide/image35.png"
style="width:6.01658in;height:2.94723in" />

Once the level of access you wish to grant is selected, Click **Add
Member**

You will see the account added to the user permissions list for the
applicable company.

<img src="/assets/admin-guide/image36.png"
style="width:6.5in;height:3.52153in" />

Member access can be edited or removed from this view as well.
