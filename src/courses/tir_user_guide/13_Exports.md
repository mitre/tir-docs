---
order: 13
next: 14_POA&MManagement.md
title: Exports
shortTitle: 13. Exports
author: Jason Kerbelis
headerDepth: 2
---

## Exports

Once you have uploaded all of the test data on for your boundary, you have the ability to export your data into a **Plan of Action and Milestones (POA&M)**, a **Findings Worksheet**, or a  **Checklist**. To export your data, navigate to your Boundary and click the **Export Data** button (as seen in *Figure 64*).

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/ExportData.png" 
    alt="Figure 64: Export Data">
</img>
</p>
<p style="text-align: center;"><em>Figure 64: Export Data</em></p>

A popup window will appear, please use the tabs at the top of the popup window to specify the output type (POA&M, Findings, Checklist, STIG Security Assessment, Nessus).

### Plan of Action and Milestones (POA&M)

To export a POA&M; navigate to your Boundary, click the **Export Data** button, click the **POAM** tab, then click **Download POAM**.

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/ExportData_POAM.png" 
    alt="Figure 65: Export POA&M">
</img>
</p>
<p style="text-align: center;"><em>Figure 65: Export POA&M</em></p>

The POA&M will organize all of the findings data for each security control that is not being met.

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/image58.jpeg" 
    alt="Figure 66: POA&M Export">
</img>
</p>
<p style="text-align: center;"><em>Figure 66: POA&M Export</em></p>

### Findings

To export your data into a **Findings Worksheet**; navigate to your Boundary, click the **Export Data** button, and click the **Findings** tab. The Findings Worksheet allows you to export data based on their finding status. Check the box next to each of finding status’ that you want to export. Then press the **Download** Findings button. For this example, we will export only the **Open** findings for our Boundary.

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/ExportData_Findings.png" 
    alt="Figure 67: Exporting Findings Spreadsheet">
</img>
</p>
<p style="text-align: center;"><em>Figure 67: Exporting Findings Spreadsheet</em></p>

A file will be downloaded to your computer titled **Findings \*.xlsx**. This findings worksheet will display every finding with the statuses that you specified in the previous step.

The findings worksheet will create an item for each Vulnerability/Finding inside of your Boundary and list all of the Systems Affected by that vulnerability.

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/image60.jpeg" 
    alt="Figure 68: Findings Export">
</img>
</p>
<p style="text-align: center;"><em>Figure 68: Findings Export</em></p>

### Checklists

TIR provides a couple options for exporting checklists. The default option exports separate checklists for each STIG in a folder with the name of the system. The default format for checklist export is .ckl. If you wish to export in .cklb format, selct the **Checklist Version 3 (.cklb)** checkbox. The other option is to create a single checklist, containing all STIGs, for each system. To export a single checklist for each system, select the **Single STIG per Checklist** checkbox before clicking **Download Checklist**.

For the default option, select **Export Data**, select the **Checklist tab**, and click **Download Checklist.**

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/ExportData_Checklists.png" 
    alt="Figure 69: Exporting Checklists">
</img>
</p>
<p style="text-align: center;"><em>Figure 69: Exporting Checklists</em></p>

The output should look like the following:

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/image62.png" 
    alt="Figure 70: Checklist Export – Folders">
</img>
</p>
<p style="text-align: center;"><em>Figure 70: Checklist Export – Folders</em></p>

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/image63.png" 
    alt="Figure 71: Checklist Export - Files">
</img>
</p>
<p style="text-align: center;"><em>Figure 71: Checklist Export - Files</em></p>

For a single checklist per system, select the **Single STIG per checklist** box.

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/ExportData_Checklists2.png" 
    alt="Figure 72: Exporting Checklists - Single STIG per Checklist">
</img>
</p>
<p style="text-align: center;"><em>Figure 72: Checklist Export - Single STIG per Checklist</em></p>

The output is as follows:

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/image65.png" 
    alt="Figure 73: Exporting Checklists - Single STIG per Checklist - Folders">
</img>
</p>
<p style="text-align: center;"><em>Figure 73: Exporting Checklists - Single STIG per Checklist - Folders</em></p>

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/image66.png" 
    alt="Figure 74: Exporting Checklists - Single STIG per Checklist - Files">
</img>
</p>
<p style="text-align: center;"><em>Figure 74: Exporting Checklists - Single STIG per Checklist - Files</em></p>

### STIG Security Assessment

The STIG Security Assessment (SSA) is a spreadsheet that provides passing and failing grades for CCI and Control Compliance. This spreadsheet will export all of the STIG checks in your boundary and map the STIG checks to the corresponding CCI and Control. If there are STIG checks with an Open status, then the corresponding CCI and Control will show a Failing status.

To export a SSA, navigate to your Boundary and click Export Data. Next, click the STIG Security Assessment Tab and then **Download**. This will download a the SSA spreadsheet to your local machine.

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/ExportData_SSA.png" 
    alt="Figure 75: SSA Export">
</img>
</p>
<p style="text-align: center;"><em>Figure 75: SSA Export</em></p>

The first tab in the SSA is the **CCI Compliance** tab. The first column, CCI, will list each applicable CCI for your boundary. This column is followed by a **CCI Description**. The **Control** column will display control(s) associated with that CCI. The **Check** column will show which STIG Checklists, with the rule IDs, that have checks that are mapped to that control. The **CCI Compliance Status** will show a pass or fail grade. The **Finding Status** will show the status of each STIG check that is mapped to the CCI. If your CCI has a failing grade, you will see the STIG Check(s) that have a Open status in the **Finding Status** column.

For an example, see *Figure 76* below.

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/SSA_CCICompliance.png" 
    alt="Figure 76: SSA - CCI Compliance Tab">
</img>
</p>
<p style="text-align: center;"><em>Figure 76: SSA - CCI Compliance Tab</em></p>

The next tab in the SSA is the **Control Compliance** tab. This tab organizes the data based by the Control and gives a passing or failing grade for each control. The first column, **Control** will list out each control applicable to your boundary. The **Control Description**, **Control Text**, and **Supplemental Guidance** columns will be blank for now. This data will be exported once the developement of Control Overlays is completed for TIR. The **Pass/Fail** column will display a passing or failing grade for the control. If any of CCIs for that control are failing then that control will receive a fail grade. The **CCIs** comlumn will list out all of the CCIs associated with each control and show you which CCIs are passing and which are failing. 

For an example, see *Figure 77* below.

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/SSA_ControlCompliance.png" 
    alt="Figure 77: SSA - Control Compliance Tab">
</img>
</p>
<p style="text-align: center;"><em>Figure 77: SSA - Control Compliance Tab</em></p>

The remaining tabs in your SSA will give you detailed information about each STIG in your boundary. This tab starts with the **CCI** column, and lists out each CCI the is applicable for the STIG Checklist you are viewing. The **CCI Description** column will give you a brief description for what the CCI is validating. The **Control** column will list the control associated to the CCI. In the example below we are viewing an Application Security and Development STIG checklist. So, the next column will display the name of the STIG. In this case, **Application Security and Development Security Technical Implementation Guide Check**. This field will display the check text for all of the STIG checks associated to the CCI. Likewise, the next tab will display the fix action text for all of the STIG checks associated to the CCI. In this case, the column reads **Application Security and Development Security Technical Implementation Guide Fix Action**. The **CCI Compliance Status** column will give a passing and failing grade for each CCI. Lastly, the **Finding Status** will list out the V-Key for each STIG check associated to the CCI and provide the status for those checks. If any STIG checks are Open then the CCI Compliance Status will be set to Fail. If none of the STIG checks are open but you still have checks set to Not Reviewed, then the CCI Compliance Status will be left blank until those Not Reviewed checks are addressed. 

For an example, see *Figure 78* below. 

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/SSA_STIGTabs.png" 
    alt="Figure 78: SSA - STIG Tabs">
</img>
</p>
<p style="text-align: center;"><em>Figure 78: SSA - STIG Tabs</em></p>

### Nessus

This section is not finished. Need the Nessus csv export to be completed.

<p>
<img 
    style="display: block; margin-left: auto; margin-right: auto; "
    src="../../assets/user-guide/ExportData_Nessus.png" 
    alt="Figure X: Nessus Export">
</img>
</p>
<p style="text-align: center;"><em>Figure X: Nessus Export</em></p>

