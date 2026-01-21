---
order: 12
next: 13_SystemStatusesAndSeveritiesWithOverrides.md
title: SCTM View
shortTitle: 11. SCTM View
author: Jason Kerbelis
toc:
  levels: [2,6]
---

## SCTM View

The Security Control Traceability Matrix (SCTM) View is used to track and manage the compliance of the Security Controls for your boundary. From the **STCM View** tab, you will see each Control Family listed as a row in the table. 

The **SCTM View** table will show the **Control Abbreviation**, **Control Family**, **Last Update**, and **Finding Status**. The finding statuses for control families are **Compliant (Green)**, **Non-Compliant (Red)**, **Not Applicable (Blue)**, and **Not Reviewed (Yellow)**.

![Figure 59: SCTM View](../../assets/user-guide/SCTM_View.png "Figure 59: SCTM View")

To display more details about a control family, simply click on the control family. A new page will load that shows you each of the security controls that belong to the control family. Each security control will have a **Control Title**, **Control Information**, and **Supplemental Guidance**. In addition to the security control details, there are four expandable and collapsible sections used to manage your SCTM data. These sections match the fields that you would find on an Enterprise Mission Assurance Support Service (eMASS) Implementation Plan. 

![Figure 60: SCTM Viewer](../../assets/user-guide/SCTM_Viewer.png "Figure 60: SCTM Viewer")

The first section is for **Implementation**. See the below screenshot for the list of available fields in the **Implementation** section. Each drop-down field will display the same options available that you would find in eMASS. 

![Figure 61: SCTM - Implementation](../../assets/user-guide/SCTM_Implementation.png "Figure 61: SCTM - Implementation")

The second section is for **Continuous Monitoring**.  See the below screenshot for the list of available fields in the **Continuous Monitoring** section.

![Figure 62: SCTM - Continuous Monitoring](../../assets/user-guide/SCTM_ContinuousMonitoring.png "Figure 62: SCTM - Continuous Monitoring")

The third section is for **Risk Assessment**.  See the below screenshot for the list of available fields in the **Risk Assessment** section.

![Figure 63: SCTM - Risk Assessment](../../assets/user-guide/SCTM_RiskAssessment.png "Figure 63: SCTM - Risk Assessment")

The final section is for **Security Assessment**.  See the below screenshot for the list of available fields in the **Security Assessment** section. This section is used by **security auditors** and **security assessors** to record when audits and assessments are performed.

![Figure 64: SCTM - Security Assessment](../../assets/user-guide/SCTM_SecurityAssessment.png "Figure 64: SCTM - Security Assessment")

When any changes are made for a security control, the user must hit the **Save** button at the bottom of the page to save their changes.

## Importing eMASS Implementation Plans

A pre-existing eMASS Implementation Plans can be imported into your TIR boundary. All of the data from the eMASS Implementation Plan will be loaded into the matching fields found inside the SCTM View. To import an eMASS Implementation Plan into your boundary, navigate to the SCTM View and click on the **Import** button found just about the SCTM table.

![Figure 65: SCTM Import](../../assets/user-guide/SCTM_Import.png "Figure 65: SCTM Import")

