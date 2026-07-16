import {
  Cpu,
  User,
  HeartPulse,
  Activity,
  RefreshCw,
  Spline,
  Baby,
  Heart,
  RotateCcw,
  Tv,
  type LucideIcon,
} from "lucide-react";

export interface ServiceContent {
  slug: string;
  title: string;
  shortName: string;
  subtitle: string;
  icon: LucideIcon;
  heroGradient: string;
  overview: string[];
  conditions?: { name: string; description: string }[];
  symptoms?: string[];
  diagnosis?: string[];
  treatmentOptions?: { name: string; description: string }[];
  surgicalApproach: string[];
  benefits: string[];
  recovery: string[];
  whyRoboticMics?: string;
  stats?: { stat: string; label: string }[];
}

export const services: ServiceContent[] = [
  {
    slug: "robotic-cardiac-surgery",
    title: "Robotic Cardiac Surgery",
    shortName: "Robotic Heart Surgery",
    subtitle: "Precision surgery through tiny incisions using advanced robotic technology",
    icon: Cpu,
    heroGradient: "from-[#0b3b80] via-[#0f4a9e] to-[#1a5fc7]",
    overview: [
      "Robotic cardiac surgery is an advanced, minimally invasive surgical approach that allows Dr. Nisarga to perform complex heart procedures through very small incisions using the da Vinci robotic surgical system. Rather than creating a large incision by splitting the breastbone (sternotomy), the robotic system enables precise, delicate movements controlled by the surgeon from a console.",
      "In a typical procedure, several small keyhole-sized incisions are made between the ribs. Robotic arms holding specialized instruments and a high-definition 3D camera are inserted through these ports. Dr. Nisarga sits at a console, translating hand, wrist, and finger movements into precise, scaled-down motions performed by the robotic instruments inside the chest.",
      "This technology provides magnified, high-definition 3D visualization of the surgical field, enabling unparalleled precision in suturing and tissue manipulation."
    ],
    conditions: [
      { name: "Coronary Artery Disease", description: "Blockages in the arteries supplying blood to the heart muscle" },
      { name: "Mitral Valve Disease", description: "Leaking or narrowed mitral valve requiring repair or replacement" },
      { name: "Tricuspid Valve Disease", description: "Dysfunction of the tricuspid valve affecting blood flow" },
      { name: "Atrial Septal Defect", description: "A hole in the wall separating the upper chambers of the heart" },
      { name: "Cardiac Tumours", description: "Benign growths in or around the heart requiring removal" },
      { name: "Atrial Fibrillation", description: "Irregular heartbeat that may require surgical ablation" },
    ],
    symptoms: [
      "Chest pain or discomfort (angina)",
      "Shortness of breath during activity or at rest",
      "Fatigue and reduced exercise tolerance",
      "Heart palpitations or irregular heartbeat",
      "Swelling in the ankles, feet, or abdomen",
      "Dizziness or fainting episodes"
    ],
    diagnosis: [
      "Physical examination and medical history review",
      "Electrocardiogram (ECG/EKG) to assess heart rhythm",
      "Echocardiogram (transthoracic or transesophageal) for heart structure imaging",
      "Coronary angiography to visualize blockages in coronary arteries",
      "CT angiography for detailed anatomical assessment",
      "Cardiac MRI for comprehensive heart evaluation",
      "Stress testing to evaluate heart function under exertion"
    ],
    treatmentOptions: [
      { name: "Medical Management", description: "Medications to manage symptoms and slow disease progression" },
      { name: "Percutaneous Intervention", description: "Stent placement via catheter for suitable blockages" },
      { name: "Robotic Cardiac Surgery", description: "Minimally invasive surgical treatment using robotic technology" },
      { name: "Traditional Open Surgery", description: "Conventional sternotomy approach for complex cases" },
    ],
    surgicalApproach: [
      "The procedure is performed under general anaesthesia with the patient carefully positioned and prepared.",
      "Several small incisions (8–12 mm) are made between the ribs to allow access for robotic instruments and the 3D camera.",
      "Carbon dioxide gas is gently insufflated into the chest cavity to create space for the surgical instruments.",
      "Dr. Nisarga controls the robotic console, performing the surgery with enhanced precision and tremor filtration.",
      "The robotic system scales down hand movements, allowing ultra-precise suturing on delicate cardiac structures.",
      "Upon completion, the instruments are removed, the small incisions are closed, and the patient is monitored in recovery."
    ],
    benefits: [
      "No splitting of the breastbone (sternal-sparing approach)",
      "Significantly reduced post-operative pain and discomfort",
      "Smaller incisions with minimal scarring",
      "Shorter hospital stay — often 2–3 days",
      "Faster return to normal daily activities and work",
      "Lower risk of wound infection and bleeding complications",
      "Reduced need for blood transfusions",
      "Magnified 3D visualization for enhanced surgical precision",
      "Tremor filtration for steadier instrument control"
    ],
    recovery: [
      "Patients are typically monitored in the ICU for 24–48 hours after surgery.",
      "Hospital discharge is often within 2–4 days, depending on the procedure performed.",
      "Most patients resume light daily activities within 1–2 weeks of surgery.",
      "A structured cardiac rehabilitation programme is recommended to optimize recovery.",
      "Return to work and normal activities typically occurs within 2–4 weeks.",
      "Long-term follow-up includes regular check-ups, imaging, and lifestyle modifications.",
      "Pain is usually managed with over-the-counter medications shortly after discharge."
    ],
    whyRoboticMics: "Robotic cardiac surgery represents the pinnacle of minimally invasive heart surgery. For appropriately selected patients, it offers all the benefits of traditional surgery with significantly reduced trauma, faster recovery, and excellent clinical outcomes. Dr. Nisarga has extensive experience in robotic cardiac surgery and carefully evaluates each patient to determine if they are suitable candidates for this advanced approach.",
    stats: [
      { stat: "2–4 days", label: "Typical Hospital Stay" },
      { stat: "1–2 weeks", label: "Return to Light Activity" },
      { stat: "<1%", label: "Conversion to Sternotomy" },
      { stat: "99%+", label: "Technical Success Rate" },
    ]
  },
  {
    slug: "minimally-invasive-cardiac-surgery",
    title: "Minimally Invasive Cardiac Surgery (MICS)",
    shortName: "MICS",
    subtitle: "Advanced heart surgery through small incisions — faster recovery, less pain",
    icon: User,
    heroGradient: "from-[#0b3b80] via-[#1351a8] to-[#1e6ad0]",
    overview: [
      "Minimally Invasive Cardiac Surgery (MICS) refers to a spectrum of surgical techniques that allow Dr. Nisarga to perform complex cardiac procedures through small incisions, without splitting the breastbone. Instead of the traditional 20–30 cm midline incision, MICS uses incisions of 4–8 cm between the ribs or through smaller ports.",
      "MICS encompasses several approaches including mini-thoracotomy, mini-sternotomy, and port-access techniques. These approaches can be used for a wide range of cardiac procedures including valve surgery, coronary bypass, and congenital heart defect repairs.",
      "At KIMS Hospitals, Dr. Nisarga leads a comprehensive MICS programme, offering patients access to the latest minimally invasive techniques while maintaining the highest standards of safety and outcomes."
    ],
    conditions: [
      { name: "Mitral Valve Disease", description: "Repair or replacement of the mitral valve through a small incision" },
      { name: "Aortic Valve Disease", description: "Aortic valve replacement via mini-sternotomy or intercostal approach" },
      { name: "Tricuspid Valve Disease", description: "Tricuspid valve surgery through minimally invasive access" },
      { name: "Coronary Artery Disease", description: "Multi-vessel bypass through small thoracic incisions (MICS CABG)" },
      { name: "Atrial Septal Defect", description: "Closure of holes between the upper heart chambers" },
      { name: "Cardiac Tumours", description: "Resection of cardiac masses through minimally invasive approaches" },
    ],
    symptoms: [
      "Chest pain, pressure, or discomfort",
      "Shortness of breath with exertion or at rest",
      "Unexplained fatigue and weakness",
      "Heart palpitations or irregular pulse",
      "Swelling in the legs, ankles, or feet",
      "Reduced ability to perform daily activities"
    ],
    diagnosis: [
      "Comprehensive physical examination and history",
      "Electrocardiogram (ECG) to evaluate heart rhythm",
      "Echocardiography (TTE or TEE) for valve and heart structure assessment",
      "Cardiac catheterization and angiography",
      "CT scan for pre-operative anatomical planning",
      "Cardiac MRI for detailed tissue characterization",
      "Exercise stress testing when appropriate"
    ],
    treatmentOptions: [
      { name: "Medical Therapy", description: "Medications to manage symptoms and optimize heart function" },
      { name: "Catheter-Based Interventions", description: "Transcatheter procedures for select valve or coronary conditions" },
      { name: "Minimally Invasive Surgery (MICS)", description: "Heart surgery through small incisions without sternotomy" },
      { name: "Conventional Open Surgery", description: "Traditional sternotomy approach for complex or high-risk cases" },
    ],
    surgicalApproach: [
      "The specific MICS approach is tailored to each patient's condition and anatomy.",
      "A 4–8 cm incision is made in the right or left chest between the ribs, avoiding the breastbone.",
      "In some cases, a mini-sternotomy (partial breastbone division) of 6–8 cm may be used.",
      "Specialized long-shafted instruments are used to perform the surgery through the small access point.",
      "A video-assisted camera may be used to enhance visualization of the surgical field.",
      "The heart-lung machine is connected through the groin (femoral cannulation) or directly through the chest incision.",
      "After completing the procedure, the incision is closed with fine sutures for optimal cosmetic results."
    ],
    benefits: [
      "No full division of the breastbone — preserves chest wall stability",
      "Smaller incisions with superior cosmetic results",
      "Less post-operative pain and reduced need for pain medication",
      "Shorter hospital stay — typically 3–5 days",
      "Faster recovery and earlier return to normal activities",
      "Lower risk of wound infection and sternal complications",
      "Reduced bleeding and lower transfusion requirements",
      "Quicker return to driving and work"
    ],
    recovery: [
      "ICU monitoring for 24–48 hours following surgery.",
      "Hospital discharge typically between 3–5 days post-operatively.",
      "Most patients can walk and perform light activities within a few days.",
      "Cardiac rehabilitation is initiated within 2–4 weeks to optimize recovery.",
      "Return to sedentary work is often possible within 3–4 weeks.",
      "Complete recovery and return to full activity within 4–8 weeks.",
      "Lifelong follow-up with regular cardiology assessments is recommended."
    ],
    whyRoboticMics: "MICS offers patients a less traumatic alternative to traditional open-heart surgery while maintaining equivalent safety and efficacy. Dr. Nisarga's expertise in multiple MICS techniques ensures that each patient receives the most appropriate minimally invasive approach for their specific condition. Not all patients are candidates for MICS, and a thorough evaluation determines the best surgical strategy for each individual.",
    stats: [
      { stat: "3–5 days", label: "Typical Hospital Stay" },
      { stat: "4–6 cm", label: "Incision Length" },
      { stat: "3–4 weeks", label: "Return to Work" },
      { stat: "4–8 weeks", label: "Full Recovery" },
    ]
  },
  {
    slug: "coronary-artery-bypass-surgery",
    title: "Coronary Artery Bypass Surgery (CABG)",
    shortName: "CABG",
    subtitle: "Restoring blood flow to the heart by bypassing blocked coronary arteries",
    icon: HeartPulse,
    heroGradient: "from-[#0b3b80] via-[#0c468e] to-[#1558b5]",
    overview: [
      "Coronary Artery Bypass Grafting (CABG) is a surgical procedure that restores blood flow to the heart muscle by creating a detour around blocked or narrowed coronary arteries. It is one of the most commonly performed and well-established cardiac surgeries worldwide.",
      "Coronary artery disease (CAD) occurs when plaque builds up within the walls of the coronary arteries, narrowing them and reducing blood flow to the heart muscle. This can lead to chest pain (angina), shortness of breath, and if left untreated, heart attack.",
      "In CABG surgery, a healthy blood vessel (graft) is taken from another part of the body — typically the chest wall, leg, or arm — and connected to the coronary artery beyond the blockage, creating a new pathway for blood to reach the heart muscle.",
      "Dr. Nisarga has extensive experience in performing CABG using multiple approaches including traditional on-pump, off-pump (beating heart), and minimally invasive techniques."
    ],
    conditions: [
      { name: "Left Main Coronary Artery Disease", description: "Significant blockage in the main artery supplying the left heart" },
      { name: "Multi-Vessel Coronary Artery Disease", description: "Blockages in two or more coronary arteries" },
      { name: "Complex Coronary Lesions", description: "Difficult blockages not suitable for stent placement" },
      { name: "Diabetes with Diffuse CAD", description: "Patients with diabetes who often have more extensive disease" },
      { name: "Failed Prior Stent", description: "Recurrent blockage at the site of a previously placed stent" },
    ],
    symptoms: [
      "Chest pain or discomfort (angina) — often described as pressure, squeezing, or fullness",
      "Shortness of breath, especially during physical activity",
      "Fatigue and reduced stamina",
      "Pain radiating to the arms, shoulder, neck, jaw, or back",
      "Heart palpitations or irregular heartbeat",
      "Dizziness or lightheadedness",
      "Nausea or indigestion"
    ],
    diagnosis: [
      "Detailed medical history and physical examination",
      "Electrocardiogram (ECG) to detect signs of reduced blood flow or prior heart attack",
      "Echocardiogram to assess heart function and wall motion abnormalities",
      "Coronary angiography (cardiac catheterization) — the gold standard for identifying blockages",
      "CT coronary angiography for non-invasive evaluation",
      "Stress testing (exercise or pharmacological) to assess functional significance of blockages",
      "Blood tests including lipid profile, cardiac enzymes, and diabetic screening"
    ],
    treatmentOptions: [
      { name: "Lifestyle Modifications", description: "Diet, exercise, smoking cessation, and risk factor management" },
      { name: "Medical Management", description: "Medications including antiplatelets, statins, beta-blockers, and nitrates" },
      { name: "Percutaneous Coronary Intervention (PCI)", description: "Angioplasty and stent placement for suitable blockages" },
      { name: "Coronary Artery Bypass Surgery (CABG)", description: "Surgical bypass of blockages using arterial or venous grafts" },
    ],
    surgicalApproach: [
      "Dr. Nisarga evaluates each patient to determine the optimal surgical approach — on-pump, off-pump, or minimally invasive.",
      "Healthy graft vessels are harvested — typically the left internal mammary artery (LIMA) from the chest and/or saphenous vein from the leg.",
      "For on-pump CABG: The heart is temporarily stopped and a heart-lung machine maintains circulation while grafts are attached.",
      "For off-pump CABG (beating heart): The heart continues beating while specialized stabilizers immobilize the area being grafted.",
      "The LIMA graft is typically connected to the left anterior descending (LAD) artery — the most important coronary vessel.",
      "Additional vein or arterial grafts are connected to other blocked coronary arteries to achieve complete revascularization.",
      "The grafts are checked for adequate flow before completing the procedure."
    ],
    benefits: [
      "Complete revascularization of all significantly blocked coronary arteries",
      "Durable, long-lasting results — LIMA grafts have 90%+ patency at 10 years",
      "Significant relief from angina and improvement in quality of life",
      "Reduced risk of heart attack and improved long-term survival",
      "Less need for repeat procedures compared to stenting in multi-vessel disease",
      "Particularly beneficial for patients with diabetes and complex coronary disease",
      "Can be performed off-pump to reduce complications in high-risk patients"
    ],
    recovery: [
      "ICU stay of 24–48 hours for close monitoring following surgery.",
      "Total hospital stay is typically 5–7 days for traditional CABG.",
      "Gradual mobilization begins within 24–48 hours after surgery.",
      "Sternal precautions are necessary for 6–8 weeks to allow bone healing (for sternotomy approaches).",
      "Cardiac rehabilitation is an essential component of recovery — typically starting 4–6 weeks post-surgery.",
      "Return to sedentary work is often possible within 6–8 weeks.",
      "Lifelong medications including antiplatelets, statins, and heart failure therapy are typically required.",
      "Regular follow-up with stress testing or imaging is recommended to monitor graft patency."
    ],
    whyRoboticMics: "For select patients with less extensive coronary disease, robotic or minimally invasive CABG (MICS CABG) may be an option. This approach avoids full sternotomy, resulting in less pain, shorter hospital stay, and faster recovery. Dr. Nisarga carefully evaluates each patient to determine if they are candidates for these less invasive bypass techniques.",
    stats: [
      { stat: "5–7 days", label: "Typical Hospital Stay" },
      { stat: "90%+", label: "LIMA Graft Patency at 10 Years" },
      { stat: "6–8 weeks", label: "Sternal Precautions" },
      { stat: "99%", label: "Off-Pump Rate in Suitable Patients" },
    ]
  },
  {
    slug: "beating-heart-surgery",
    title: "Beating Heart Surgery (Off-Pump CABG)",
    shortName: "Beating Heart Surgery",
    subtitle: "Coronary bypass performed on a beating heart — avoiding the heart-lung machine",
    icon: Activity,
    heroGradient: "from-[#0b3b80] via-[#104998] to-[#1962c4]",
    overview: [
      "Beating heart surgery, medically known as Off-Pump Coronary Artery Bypass Grafting (OPCAB), is a specialized technique for performing coronary bypass surgery while the heart continues to beat naturally. Unlike traditional CABG where the heart is stopped and a heart-lung machine takes over circulation, OPCAB avoids the use of cardiopulmonary bypass entirely.",
      "This technique eliminates the potential complications associated with the heart-lung machine, including systemic inflammatory response, blood cell damage, and the risk of stroke from aortic manipulation. Dr. Nisarga performs nearly 99% of his coronary bypass surgeries using the off-pump technique whenever clinically appropriate.",
      "Using specialized mechanical stabilizers, the specific area of the heart where the bypass graft needs to be attached is immobilized, allowing precise suturing while the rest of the heart continues to beat and function normally."
    ],
    conditions: [
      { name: "Multi-Vessel Coronary Disease", description: "Blockages requiring bypass in multiple coronary territories" },
      { name: "Left Main Coronary Artery Disease", description: "Critical narrowing of the main coronary artery" },
      { name: "Porcelain Aorta", description: "Heavily calcified aorta where clamping poses high stroke risk" },
      { name: "Chronic Kidney Disease", description: "Patients who may be adversely affected by the heart-lung machine" },
      { name: "Severe Lung Disease", description: "Patients with COPD or other pulmonary conditions" },
      { name: "High-Risk Surgical Candidates", description: "Elderly or frail patients who may benefit from avoiding bypass" },
    ],
    symptoms: [
      "Angina — chest pain or pressure with activity or stress",
      "Shortness of breath during exertion",
      "Fatigue and decreased exercise capacity",
      "Heart palpitations or irregular pulse",
      "Swelling in the lower extremities",
      "Reduced tolerance for physical activity",
      "Dizziness or lightheadedness"
    ],
    diagnosis: [
      "Clinical evaluation with detailed cardiac history",
      "Electrocardiogram (ECG) — resting and stress",
      "Echocardiogram for heart function assessment",
      "Coronary angiography to determine the extent and location of blockages",
      "CT scan to evaluate aortic calcification (porcelain aorta screening)",
      "Carotid Doppler and peripheral vascular assessment",
      "Pre-operative risk stratification including renal and pulmonary function"
    ],
    treatmentOptions: [
      { name: "Optimal Medical Therapy", description: "Aggressive medical management of coronary disease" },
      { name: "Stent Placement (PCI)", description: "Percutaneous coronary intervention for suitable lesions" },
      { name: "Off-Pump CABG (Beating Heart)", description: "Bypass surgery without the heart-lung machine" },
      { name: "On-Pump CABG", description: "Traditional bypass with cardiopulmonary bypass support" },
      { name: "Hybrid Revascularization", description: "Combination of bypass surgery and stenting" },
    ],
    surgicalApproach: [
      "A median sternotomy (midline chest incision) is typically performed to access the heart.",
      "The internal mammary artery is carefully harvested from the chest wall, along with other grafts from the leg or arm.",
      "Specialized mechanical stabilizers are positioned to immobilize the specific area of the heart being grafted.",
      "The beating heart is positioned using a pericardial cradle and stabilizer to expose the target coronary artery.",
      "A temporary shunt or blower may be used to maintain a clear surgical field while the artery is opened.",
      "The bypass graft is meticulously sutured to the coronary artery while the heart continues to beat.",
      "Each graft is checked for adequate flow using transit-time flow measurement before completion.",
      "The procedure is repeated for each coronary artery requiring bypass."
    ],
    benefits: [
      "Avoids the systemic inflammatory response associated with the heart-lung machine",
      "Reduced risk of neurological complications and stroke",
      "Lower rates of acute kidney injury post-operatively",
      "Reduced need for blood transfusions",
      "Faster recovery from anaesthesia and surgery",
      "Particularly beneficial for patients with calcified aorta (porcelain aorta)",
      "Less coagulopathy and bleeding complications",
      "Shorter ICU and hospital stay in many cases"
    ],
    recovery: [
      "ICU monitoring for 24–48 hours after surgery.",
      "Hospital discharge typically occurs within 5–7 days.",
      "Early mobilization begins within 24 hours of surgery.",
      "Strict sternal precautions are maintained for 6–8 weeks.",
      "Cardiac rehabilitation is initiated at 4–6 weeks post-operatively.",
      "Return to work is typically possible within 6–8 weeks for sedentary occupations.",
      "Long-term follow-up includes risk factor management and medication adherence.",
      "Regular cardiac evaluations are recommended to monitor graft function."
    ],
    whyRoboticMics: "While beating heart surgery avoids the heart-lung machine, it still typically requires a full sternotomy. For selected patients with appropriate coronary anatomy, Dr. Nisarga may combine off-pump techniques with minimally invasive or robotic approaches for a less invasive bypass procedure. This hybrid approach offers the benefits of avoiding both sternotomy and cardiopulmonary bypass.",
    stats: [
      { stat: "99%", label: "Off-Pump Rate in Suitable Patients" },
      { stat: "5–7 days", label: "Typical Hospital Stay" },
      { stat: "Reduced", label: "Stroke Risk vs On-Pump" },
      { stat: "6–8 weeks", label: "Full Recovery Timeline" },
    ]
  },
  {
    slug: "valve-repair-replacement",
    title: "Heart Valve Repair & Replacement",
    shortName: "Valve Surgery",
    subtitle: "Restoring proper heart valve function through repair or replacement",
    icon: RefreshCw,
    heroGradient: "from-[#0b3b80] via-[#0e4593] to-[#175dc0]",
    overview: [
      "Heart valve surgery addresses diseases affecting the four valves of the heart — mitral, aortic, tricuspid, and pulmonary. These valves ensure that blood flows in one direction through the heart. When a valve becomes stenotic (narrowed) or regurgitant (leaky), it forces the heart to work harder and can lead to heart failure if left untreated.",
      "Valve disease can be treated either by repairing the existing valve or replacing it with a new one. Whenever possible, valve repair is preferred over replacement as it preserves the patient's native tissue, avoids the need for lifelong blood thinners (in many cases), and offers excellent long-term outcomes.",
      "Dr. Nisarga has extensive experience in complex valve repair and reconstruction, employing the latest techniques to restore optimal valve function. His approach includes minimally invasive and robotic-assisted options when appropriate."
    ],
    conditions: [
      { name: "Mitral Valve Regurgitation", description: "Leaking of the mitral valve causing backward blood flow" },
      { name: "Mitral Valve Stenosis", description: "Narrowing of the mitral valve opening" },
      { name: "Aortic Valve Stenosis", description: "Narrowing of the aortic valve, restricting blood flow from the heart" },
      { name: "Aortic Valve Regurgitation", description: "Leaking of the aortic valve" },
      { name: "Tricuspid Valve Disease", description: "Regurgitation or stenosis of the tricuspid valve" },
      { name: "Mitral Valve Prolapse", description: "Bulging of the mitral valve leaflets into the left atrium" },
      { name: "Infective Endocarditis", description: "Valve infection causing destruction or dysfunction" },
    ],
    symptoms: [
      "Shortness of breath, especially with activity or when lying flat",
      "Fatigue and weakness",
      "Heart murmurs detected on physical examination",
      "Palpitations or irregular heart rhythm (atrial fibrillation)",
      "Swelling in the ankles, feet, or abdomen",
      "Chest pain or tightness",
      "Dizziness or fainting",
      "Rapid weight gain from fluid retention"
    ],
    diagnosis: [
      "Clinical examination — murmur detection and symptom assessment",
      "Echocardiography (transthoracic and transesophageal) — primary diagnostic tool",
      "Electrocardiogram (ECG) for rhythm evaluation",
      "Chest X-ray to assess heart size and pulmonary circulation",
      "Cardiac catheterization for hemodynamic assessment",
      "CT scan for pre-operative planning, especially for minimally invasive approaches",
      "Cardiac MRI for detailed valve morphology and ventricular function",
      "Exercise stress testing to evaluate functional capacity"
    ],
    treatmentOptions: [
      { name: "Medical Monitoring", description: "Regular surveillance with echocardiography for mild disease" },
      { name: "Medications", description: "Diuretics, vasodilators, and rate control for symptom management" },
      { name: "Valve Repair", description: "Surgical reconstruction of the native valve — the preferred approach" },
      { name: "Valve Replacement with Biological Valve", description: "Replacement using tissue valve from human, cow, or pig" },
      { name: "Valve Replacement with Mechanical Valve", description: "Replacement using a mechanical prosthesis requiring lifelong blood thinners" },
      { name: "Transcatheter Valve Procedures", description: "Catheter-based valve replacement or repair for select patients" },
    ],
    surgicalApproach: [
      "The surgical approach depends on the valve involved, the nature of the disease, and patient factors.",
      "For mitral valve repair: Dr. Nisarga uses techniques including leaflet resection, chordal replacement, and annuloplasty ring placement.",
      "For aortic valve replacement: The diseased valve is excised and a new biological or mechanical prosthesis is sutured in place.",
      "Robotic or minimally invasive approaches may be used for mitral and tricuspid valve surgery through small chest incisions.",
      "For complex cases involving multiple valves or concomitant bypass surgery, a sternotomy approach is utilised.",
      "Intraoperative transesophageal echocardiography is routinely used to assess the quality of repair or replacement before completing the procedure."
    ],
    benefits: [
      "Valve repair preserves the patient's own tissue and ventricular function",
      "Repair avoids the need for lifelong anticoagulation (blood thinners) in most cases",
      "Excellent long-term durability of valve repair — often 15–20 years",
      "Significant improvement in symptoms and quality of life",
      "Restored exercise capacity and functional status",
      "Minimally invasive options reduce recovery time and pain",
      "Biological valves eliminate the need for lifelong blood thinners",
      "Robotic-assisted valve surgery offers faster recovery with less scarring"
    ],
    recovery: [
      "ICU monitoring for 24–48 hours after valve surgery.",
      "Total hospital stay typically 5–7 days for sternotomy, 3–5 days for minimally invasive approaches.",
      "Gradual return to activities over 4–8 weeks depending on the surgical approach.",
      "Patients with mechanical valves require lifelong anticoagulation with regular INR monitoring.",
      "Patients with biological valves are usually weaned off blood thinners within 3–6 months.",
      "Cardiac rehabilitation is an important part of the recovery process.",
      "Lifelong follow-up with regular echocardiograms to monitor valve function.",
      "Antibiotic prophylaxis before dental procedures is recommended for all valve patients."
    ],
    whyRoboticMics: "Robotic and minimally invasive approaches have revolutionized valve surgery, particularly for mitral and tricuspid valve disease. These techniques allow Dr. Nisarga to perform complex valve repairs through small incisions between the ribs, avoiding sternotomy. This results in less pain, shorter hospital stay, faster recovery, and superior cosmetic outcomes — all while maintaining the same high standards of valve repair quality.",
    stats: [
      { stat: "3–7 days", label: "Typical Hospital Stay" },
      { stat: "15–20 years", label: "Durability of Valve Repair" },
      { stat: "Preferred", label: "Repair over Replacement" },
      { stat: "95%+", label: "Successful Repair Rate" },
    ]
  },
  {
    slug: "aortic-surgery",
    title: "Aortic Surgery",
    shortName: "Aortic Surgery",
    subtitle: "Expert surgical management of diseases affecting the aorta",
    icon: Spline,
    heroGradient: "from-[#0b3b80] via-[#114b9d] to-[#1d66cc]",
    overview: [
      "Aortic surgery encompasses procedures to treat diseases affecting the aorta — the largest artery in the body, responsible for carrying oxygen-rich blood from the heart to the rest of the body. Aortic diseases can be life-threatening if left untreated and require specialized surgical expertise.",
      "Conditions of the aorta include aneurysms (abnormal dilation), dissections (tears in the vessel wall), and other structural abnormalities affecting the ascending aorta, aortic arch, or descending aorta.",
      "Dr. Nisarga has extensive experience in managing complex aortic pathology, employing a range of surgical techniques from conventional open repair to hybrid and endovascular approaches."
    ],
    conditions: [
      { name: "Ascending Aortic Aneurysm", description: "Dilation of the aorta as it leaves the heart, at risk of rupture" },
      { name: "Aortic Dissection", description: "A tear in the inner layer of the aortic wall (Type A or Type B)" },
      { name: "Aortic Root Aneurysm", description: "Enlargement of the aortic root, often associated with connective tissue disorders" },
      { name: "Aortic Arch Aneurysm", description: "Aneurysm involving the curved portion of the aorta" },
      { name: "Thoracoabdominal Aortic Aneurysm", description: "Extensive aneurysm involving both chest and abdominal aorta" },
      { name: "Aortic Coarctation", description: "Congenital narrowing of the aorta" },
      { name: "Traumatic Aortic Injury", description: "Aortic damage from high-impact trauma" },
    ],
    symptoms: [
      "Severe chest or back pain (often described as tearing or ripping in dissection)",
      "Shortness of breath",
      "Hoarseness or difficulty swallowing (from compression)",
      "Cough or wheezing",
      "Pain between the shoulder blades",
      "Difference in blood pressure between arms",
      "Symptoms of heart failure if aortic valve is involved",
      "Often asymptomatic — detected incidentally on imaging"
    ],
    diagnosis: [
      "CT angiography — the primary imaging modality for aortic diseases",
      "Echocardiography (transthoracic and transesophageal)",
      "Magnetic resonance angiography (MRA)",
      "Chest X-ray (may show widened mediastinum)",
      "Aortography for detailed anatomical assessment",
      "Genetic testing for connective tissue disorders (Marfan, Ehlers-Danlos, etc.)",
      "Regular surveillance imaging for known aortic aneurysms"
    ],
    treatmentOptions: [
      { name: "Medical Management", description: "Blood pressure control and regular imaging surveillance for small aneurysms" },
      { name: "Open Surgical Repair", description: "Replacement of the diseased aortic segment with a synthetic graft" },
      { name: "Valve-Sparing Aortic Root Replacement", description: "Replacement of the aortic root while preserving the patient's own aortic valve" },
      { name: "Bentall Procedure", description: "Combined replacement of the aortic valve, root, and ascending aorta" },
      { name: "Hybrid Arch Repair", description: "Combined surgical and endovascular approach for arch aneurysms" },
      { name: "Endovascular Aortic Repair", description: "Stent-graft repair for select descending aortic pathologies" },
    ],
    surgicalApproach: [
      "The specific surgical approach depends on the location and extent of aortic disease.",
      "For ascending aortic aneurysms: A median sternotomy is performed, and the diseased aortic segment is replaced with a synthetic Dacron graft.",
      "For aortic root involvement: A composite graft replacement (Bentall procedure) or valve-sparing root replacement (David procedure) is performed.",
      "For aortic dissection (Type A): Emergency surgery is performed to replace the ascending aorta and repair the entry tear.",
      "Deep hypothermic circulatory arrest may be used for complex arch repairs to protect the brain during the procedure.",
      "Intraoperative transesophageal echocardiography and neuromonitoring are used to guide the procedure and ensure optimal outcomes."
    ],
    benefits: [
      "Lifesaving treatment for acute aortic dissection and large aneurysms",
      "Definitive repair preventing rupture — which has high mortality",
      "Valve-sparing techniques avoid the need for lifelong blood thinners",
      "Excellent long-term durability of surgical grafts — typically lifelong",
      "Improved quality of life by alleviating symptoms and anxiety",
      "Low operative mortality in elective repairs at experienced centres"
    ],
    recovery: [
      "ICU stay of 2–5 days depending on the complexity of the repair.",
      "Total hospital stay typically 7–14 days for major aortic surgery.",
      "Recovery is more prolonged than standard cardiac surgery due to the complexity.",
      "Strict blood pressure control is essential during recovery and long-term.",
      "Regular imaging surveillance (CT or MRI) is required to monitor the remaining aorta.",
      "Return to normal activities typically takes 8–12 weeks.",
      "Lifelong follow-up with a cardiologist specializing in aortic disease is recommended."
    ],
    whyRoboticMics: "Due to the complexity and extent of aortic diseases, minimally invasive approaches have limited application. However, for select distal arch or descending aortic pathologies, hybrid approaches combining open and endovascular techniques may reduce surgical trauma. Dr. Nisarga evaluates each patient individually to determine the safest and most effective approach.",
    stats: [
      { stat: "7–14 days", label: "Typical Hospital Stay" },
      { stat: "Lifelong", label: "Graft Durability" },
      { stat: "Emergency", label: "Dissection Requires Urgent Surgery" },
      { stat: "Excellent", label: "Elective Repair Outcomes" },
    ]
  },
  {
    slug: "congenital-heart-surgery",
    title: "Congenital Heart Surgery",
    shortName: "Congenital Heart Surgery",
    subtitle: "Surgical correction of heart defects present from birth",
    icon: Baby,
    heroGradient: "from-[#0b3b80] via-[#124fa2] to-[#1f6bc7]",
    overview: [
      "Congenital heart surgery addresses structural heart defects that are present at birth. These defects can range from simple holes between heart chambers to complex malformations involving multiple cardiac structures. Congenital heart defects are the most common type of birth defect, affecting approximately 1 in every 100 newborns.",
      "While some minor defects may close on their own or require minimal intervention, many congenital heart conditions require surgical correction to ensure normal heart function and long-term health.",
      "Dr. Nisarga has extensive experience in managing both adult congenital heart disease (patients who have reached adulthood with treated or untreated congenital defects) and paediatric patients with complex congenital conditions."
    ],
    conditions: [
      { name: "Atrial Septal Defect (ASD)", description: "A hole in the wall separating the upper chambers of the heart" },
      { name: "Ventricular Septal Defect (VSD)", description: "A hole in the wall separating the lower chambers of the heart" },
      { name: "Tetralogy of Fallot", description: "A complex defect involving four anatomical abnormalities" },
      { name: "Patent Ductus Arteriosus (PDA)", description: "Failure of a normal fetal blood vessel to close after birth" },
      { name: "Coarctation of the Aorta", description: "Narrowing of the aorta, usually beyond the left subclavian artery" },
      { name: "Pulmonary Valve Stenosis", description: "Narrowing of the pulmonary valve" },
      { name: "Ebstein's Anomaly", description: "Abnormal development of the tricuspid valve" },
      { name: "Anomalous Pulmonary Venous Return", description: "Abnormal connection of the pulmonary veins" },
    ],
    symptoms: [
      "Cyanosis — bluish discoloration of the skin, lips, or nail beds",
      "Rapid breathing or shortness of breath",
      "Poor feeding and failure to thrive in infants",
      "Fatigue and easy tiring during physical activity",
      "Heart murmurs detected on routine examination",
      "Recurrent respiratory infections",
      "Swelling in the legs, abdomen, or around the eyes",
      "Fainting or dizziness during exercise"
    ],
    diagnosis: [
      "Prenatal ultrasound screening may detect some congenital heart defects before birth.",
      "Echocardiography (fetal, transthoracic, or transesophageal) as the primary diagnostic tool",
      "Pulse oximetry screening in newborns",
      "Electrocardiogram (ECG) to assess heart rhythm and chamber enlargement",
      "Chest X-ray to evaluate heart size and pulmonary blood flow",
      "Cardiac catheterization for hemodynamic assessment and pressure measurements",
      "Cardiac MRI and CT for detailed anatomical definition",
      "Genetic testing for associated syndromes"
    ],
    treatmentOptions: [
      { name: "Medical Monitoring", description: "Observation for small defects that may close spontaneously" },
      { name: "Medications", description: "Drugs to manage symptoms and support heart function" },
      { name: "Catheter-Based Closure", description: "Device closure of select ASDs, VSDS, and PDAs through catheters" },
      { name: "Open Surgical Repair", description: "Surgical correction of the defect through an appropriate approach" },
      { name: "Staged Surgical Procedures", description: "Multiple surgeries over years for complex congenital heart disease" },
    ],
    surgicalApproach: [
      "The surgical approach is tailored to the specific congenital defect and the patient's age and anatomy.",
      "For simple defects like ASD or VSD: Repair can often be performed through a right mini-thoracotomy or robotic approach in suitable patients.",
      "The defect is directly sutured closed or patched using the patient's own pericardium or synthetic material.",
      "For complex defects like Tetralogy of Fallot: Complete intracardiac repair is performed to address all components of the defect.",
      "Intraoperative echocardiography is routinely used to confirm the adequacy of the repair before completing the procedure.",
      "For adult patients with congenital heart disease, minimally invasive approaches may be considered when appropriate."
    ],
    benefits: [
      "Definitive correction of structural heart defects",
      "Normalization of heart function and circulation",
      "Resolution of symptoms — cyanosis, breathlessness, fatigue",
      "Improved growth and development in children",
      "Restored exercise capacity and quality of life",
      "Prevention of long-term complications including pulmonary hypertension and heart failure",
      "Minimally invasive options for select defects in appropriate patients"
    ],
    recovery: [
      "Recovery depends on the complexity of the defect and the surgical approach.",
      "ICU monitoring for 24–72 hours for straightforward repairs, longer for complex cases.",
      "Hospital stay typically ranges from 3–10 days depending on the procedure.",
      "Most children recover well and return to normal activities within 4–6 weeks.",
      "Regular follow-up with echocardiography is required to monitor the repair.",
      "Lifelong cardiology follow-up is recommended for all congenital heart patients.",
      "Endocarditis prophylaxis is recommended before dental or surgical procedures.",
      "Physical activity guidelines are provided based on the specific defect and repair."
    ],
    whyRoboticMics: "For appropriate adult patients with simple congenital defects such as atrial septal defects, robotic-assisted repair offers a minimally invasive option that avoids sternotomy. This approach provides excellent visualization of the defect, precise closure, and all the benefits of minimally invasive surgery including reduced pain, faster recovery, and superior cosmetic outcomes.",
    stats: [
      { stat: "1 in 100", label: "Newborns Affected" },
      { stat: "3–10 days", label: "Typical Hospital Stay" },
      { stat: "90%+", label: "Successful Repair Rate" },
      { stat: "Lifelong", label: "Cardiology Follow-Up" },
    ]
  },
  {
    slug: "paediatric-cardiac-surgery",
    title: "Paediatric Cardiac Surgery",
    shortName: "Paediatric Cardiac Surgery",
    subtitle: "Specialized heart surgery for children from infancy through adolescence",
    icon: Heart,
    heroGradient: "from-[#0b3b80] via-[#0d4897] to-[#1961c5]",
    overview: [
      "Paediatric cardiac surgery is a highly specialized field dedicated to the surgical treatment of heart conditions in children — from newborns and infants to adolescents. Children with heart disease present unique challenges due to their small size, growing bodies, and the need for long-term solutions that last a lifetime.",
      "Heart conditions in children can be congenital (present at birth) or acquired (developing after birth, such as from infections or Kawasaki disease). The spectrum of paediatric cardiac surgery ranges from simple repairs to complex reconstructive procedures.",
      "Dr. Nisarga has extensive experience in paediatric cardiac surgery, having performed thousands of paediatric cases. He understands the unique physiological and emotional needs of children and their families."
    ],
    conditions: [
      { name: "Atrial Septal Defect (ASD)", description: "Hole between the upper chambers requiring closure" },
      { name: "Ventricular Septal Defect (VSD)", description: "Hole between the lower chambers requiring closure" },
      { name: "Tetralogy of Fallot", description: "Complex defect requiring complete repair" },
      { name: "Transposition of Great Arteries", description: "Swapped artery connections requiring arterial switch operation" },
      { name: "Total Anomalous Pulmonary Venous Return", description: "Abnormal pulmonary vein drainage" },
      { name: "Truncus Arteriosus", description: "Single vessel leaving the heart instead of two" },
      { name: "Hypoplastic Left Heart Syndrome", description: "Underdeveloped left heart requiring staged palliation" },
      { name: "Kawasaki Disease Complications", description: "Coronary aneurysms from this childhood inflammatory condition" },
    ],
    symptoms: [
      "Cyanosis — blue or purple tint to skin, lips, or nail beds",
      "Rapid or difficult breathing (tachypnea)",
      "Poor feeding and difficulty gaining weight",
      "Excessive fatigue during feeding or play",
      "Frequent respiratory infections",
      "Heart murmurs",
      "Cold hands and feet",
      "Drowsiness or reduced activity level",
      "Fainting or seizures in severe cases"
    ],
    diagnosis: [
      "Prenatal diagnosis through fetal echocardiography (increasingly common)",
      "Postnatal echocardiography — the primary diagnostic tool",
      "Pulse oximetry screening for critical congenital heart disease",
      "Electrocardiogram (ECG)",
      "Chest X-ray",
      "Cardiac catheterization for complex defects",
      "Cardiac CT and MRI for detailed anatomical assessment",
      "Genetic testing for associated syndromes",
      "Multidisciplinary evaluation by a paediatric cardiology team"
    ],
    treatmentOptions: [
      { name: "Medical Management", description: "Medications to support heart function and manage symptoms" },
      { name: "Catheter-Based Interventions", description: "Device closure or balloon dilation for select defects" },
      { name: "Corrective Cardiac Surgery", description: "Complete surgical repair of the defect in one operation" },
      { name: "Staged Palliative Surgery", description: "Series of operations to manage complex single-ventricle defects" },
      { name: "Hybrid Procedures", description: "Combined surgical and catheter-based approaches" },
    ],
    surgicalApproach: [
      "Paediatric cardiac surgery is performed under general anaesthesia with specialized paediatric anaesthesia support.",
      "A median sternotomy is the most common approach, providing excellent access to the heart and great vessels.",
      "Cardiopulmonary bypass with specialized paediatric oxygenators and circuits is used when the heart needs to be stopped.",
      "For neonates and infants, deep hypothermic circulatory arrest may be employed for certain complex repairs.",
      "The specific repair technique depends on the underlying defect — patch closure, valve repair, arterial switch, conduit placement, or complex reconstruction.",
      "Intraoperative echocardiography is used to assess the quality of repair before chest closure.",
      "The sternum may be left open temporarily in select cases to allow for cardiac swelling in the early post-operative period."
    ],
    benefits: [
      "Definitive correction of heart defects, often in a single operation",
      "Normalization of blood flow and oxygen levels in the body",
      "Resolution of cyanosis and symptoms",
      "Improved growth, development, and quality of life",
      "Restored ability to participate in normal childhood activities",
      "Long-term survival with good functional outcomes for most congenital defects",
      "Prevention of permanent damage to the heart and lungs"
    ],
    recovery: [
      "Paediatric cardiac intensive care unit stay ranges from days to weeks depending on complexity.",
      "The cardiac ICU is staffed by specialized paediatric intensivists and cardiac nurses.",
      "Pain management is carefully tailored for children, using age-appropriate medications and techniques.",
      "Nutritional support is crucial — some children may require temporary feeding tube support.",
      "Hospital stay ranges from 5–14 days for most repairs, longer for complex cases.",
      "Follow-up care includes regular echocardiograms and paediatric cardiology evaluations.",
      "Most children can return to school and normal activities within 4–8 weeks.",
      "Lifelong cardiology follow-up is essential for all paediatric cardiac surgical patients.",
      "Physical activity guidelines are provided, with most children able to participate in normal activities."
    ],
    whyRoboticMics: "Minimally invasive and robotic techniques have limited application in young children due to their small size. However, for older children, adolescents, and adults with congenital heart disease, these approaches may be considered for select simple defects. The primary goals in paediatric cardiac surgery remain complete correction with the lowest possible risk, regardless of the approach used.",
    stats: [
      { stat: "6,000+", label: "Paediatric & Adult Cases Performed" },
      { stat: "5–14 days", label: "Typical Hospital Stay" },
      { stat: "95%+", label: "Survival for Simple Defects" },
      { stat: "Lifelong", label: "Cardiology Follow-Up Required" },
    ]
  },
  {
    slug: "redo-cardiac-surgery",
    title: "Redo Cardiac Surgery",
    shortName: "Redo Cardiac Surgery",
    subtitle: "Complex repeat heart surgery for patients who have had prior cardiac procedures",
    icon: RotateCcw,
    heroGradient: "from-[#0b3b80] via-[#0e4593] to-[#1a5fc9]",
    overview: [
      "Redo cardiac surgery refers to repeat heart surgery performed on patients who have previously undergone a cardiac surgical procedure. These operations are technically more challenging than first-time surgeries due to the presence of scar tissue, adhesions, and altered anatomy from the previous operation.",
      "Patients may require redo surgery for several reasons including degeneration of previously placed valves, progression of coronary artery disease in bypass grafts, or complications from prior procedures. Redo cardiac surgery requires meticulous planning, exceptional surgical skill, and a comprehensive understanding of cardiac reoperative anatomy.",
      "Dr. Nisarga has extensive experience in performing technically demanding redo cardiac surgeries with outcomes comparable to primary operations."
    ],
    conditions: [
      { name: "Degenerative Bioprosthetic Valve", description: "Deterioration of a previously placed tissue valve requiring re-replacement" },
      { name: "Mechanical Valve Dysfunction", description: "Thrombosis, pannus formation, or structural failure of a mechanical valve" },
      { name: "Bypass Graft Failure", description: "Blockage of previously placed coronary bypass grafts" },
      { name: "Progression of Native Coronary Disease", description: "New blockages in coronary arteries not previously bypassed" },
      { name: "Recurrent Mitral Regurgitation", description: "Failure of a prior mitral valve repair" },
      { name: "Post-Operative Complications", description: "Issues such as mediastinitis, pseudoaneurysm, or residual defects" },
      { name: "Aortic Root or Graft Issues", description: "Problems with previously placed aortic grafts or roots" },
    ],
    symptoms: [
      "Return of symptoms that were initially relieved by the first surgery",
      "Chest pain or angina (recurrent or new)",
      "Shortness of breath — progressive or worsening",
      "Fatigue and reduced exercise capacity",
      "Heart murmurs indicating valve dysfunction",
      "Swelling in the legs or abdomen",
      "Palpitations or irregular heartbeat",
      "Fluid retention and rapid weight gain"
    ],
    diagnosis: [
      "Detailed review of prior operative records and imaging studies",
      "Echocardiography (transthoracic and transesophageal) for valve and functional assessment",
      "Coronary angiography to evaluate native vessels and bypass grafts",
      "CT scan with contrast — essential for assessing the relationship of cardiac structures to the sternum",
      "Cardiac MRI for comprehensive evaluation when needed",
      "Pre-operative risk assessment including frailty and organ function evaluation",
      "Multidisciplinary team review for complex redo cases"
    ],
    treatmentOptions: [
      { name: "Medical Optimization", description: "Management of symptoms when reoperation risk is prohibitively high" },
      { name: "Catheter-Based Interventions", description: "Transcatheter valve-in-valve or valve-in-ring procedures for select patients" },
      { name: "Redo Surgical Intervention", description: "Repeat surgery to address the underlying problem" },
      { name: "Hybrid Approaches", description: "Combined surgical and catheter-based strategies for complex cases" },
    ],
    surgicalApproach: [
      "Meticulous pre-operative planning includes CT imaging to map the relationship of the heart to the sternum.",
      "The chest is re-entered carefully, with special instruments and techniques to avoid damaging the heart or bypass grafts.",
      "Femoral vessels are often prepared for peripheral cannulation before opening the chest (for emergency bypass support if needed).",
      "Adhesions between the heart and surrounding structures are carefully dissected to expose the area requiring surgery.",
      "The specific repair or replacement is performed based on the indication for redo surgery.",
      "Meticulous haemostasis is critical due to the increased risk of bleeding in reoperative surgery.",
      "The chest is closed in layers with careful attention to wound healing."
    ],
    benefits: [
      "Definitive treatment for recurrent or progressive cardiac disease",
      "Significant improvement in symptoms and quality of life",
      "Correction of problems that cannot be managed with medications alone",
      "Long-term durability — comparable to primary surgery in many cases",
      "Alternative to high-risk catheter-based procedures for appropriate patients",
      "Improved survival compared to medical management alone for most conditions"
    ],
    recovery: [
      "ICU monitoring is typically longer than for first-time surgery — often 2–4 days.",
      "Total hospital stay is usually 7–14 days depending on the complexity.",
      "Recovery may be slower than the initial surgery due to the increased complexity.",
      "Enhanced recovery protocols are used to optimize healing and outcomes.",
      "Cardiac rehabilitation is strongly recommended and may need to be modified.",
      "Return to normal activities typically takes 8–12 weeks.",
      "Lifelong follow-up with regular imaging is essential."
    ],
    whyRoboticMics: "Minimally invasive approaches have limited application in redo cardiac surgery due to the presence of adhesions and the need for extensive dissection. However, in select redo cases where the reoperative target is accessible through a small incision, minimally invasive techniques may be considered to reduce surgical trauma.",
    stats: [
      { stat: "7–14 days", label: "Typical Hospital Stay" },
      { stat: "2–4 days", label: "ICU Stay" },
      { stat: "Skilled", label: "Requires High Surgical Expertise" },
      { stat: "8–12 weeks", label: "Full Recovery Timeline" },
    ]
  },
  {
    slug: "ecmo",
    title: "ECMO — Extracorporeal Membrane Oxygenation",
    shortName: "ECMO",
    subtitle: "Advanced life support for patients with severe heart and lung failure",
    icon: Tv,
    heroGradient: "from-[#0b3b80] via-[#104a9c] to-[#1d68cf]",
    overview: [
      "Extracorporeal Membrane Oxygenation (ECMO) is an advanced life support technique that temporarily takes over the function of the heart and/or lungs, allowing these organs to rest and heal. ECMO circulates blood outside the body through an artificial lung (oxygenator) that adds oxygen and removes carbon dioxide before returning the blood to the patient.",
      "ECMO is used for patients with severe, potentially reversible heart or lung failure who have not responded to conventional treatments. It serves as a bridge to recovery, to more definitive therapies, or to heart/lung transplantation.",
      "Dr. Nisarga and his team at KIMS Hospitals have extensive experience in providing ECMO support for critically ill patients, including those with severe cardiac failure, postcardiotomy shock, and respiratory failure."
    ],
    conditions: [
      { name: "Postcardiotomy Cardiogenic Shock", description: "Severe heart failure after cardiac surgery requiring circulatory support" },
      { name: "Acute Myocardial Infarction with Shock", description: "Massive heart attack causing profound heart failure" },
      { name: "Acute Respiratory Distress Syndrome (ARDS)", description: "Severe lung injury with profound oxygen failure" },
      { name: "Severe Myocarditis", description: "Inflammation of the heart muscle causing pump failure" },
      { name: "Pulmonary Embolism with Shock", description: "Massive blood clot in the lungs causing circulatory collapse" },
      { name: "Bridge to Heart or Lung Transplantation", description: "Supporting patients while awaiting organ transplantation" },
      { name: "Septic Cardiomyopathy", description: "Heart failure secondary to severe infection" },
      { name: "Accidental Hypothermia with Cardiac Arrest", description: "Rewarming and circulatory support after severe cold exposure" },
    ],
    symptoms: [
      "Profound shortness of breath at rest",
      "Severely low oxygen levels despite maximum respiratory support",
      "Very low blood pressure not responding to medications",
      "Reduced level of consciousness",
      "Inadequate blood flow to vital organs (kidney, liver, brain)",
      "Cardiac arrest refractory to standard resuscitation",
      "Inability to wean from cardiopulmonary bypass after heart surgery"
    ],
    diagnosis: [
      "ECMO is a therapeutic intervention initiated based on clinical criteria, not a diagnosis itself.",
      "Echocardiography to assess cardiac function and exclude treatable causes",
      "Arterial blood gas analysis to assess oxygenation and ventilation",
      "Hemodynamic monitoring including cardiac output measurements",
      "Lung imaging (chest X-ray, CT) for respiratory failure assessment",
      "Multidisciplinary team evaluation to determine ECMO candidacy",
      "Assessment of potential for recovery or candidacy for transplantation"
    ],
    treatmentOptions: [
      { name: "Conventional Medical Therapy", description: "Medications and ventilator support for less severe cases" },
      { name: "Veno-Arterial (VA) ECMO", description: "Support for both heart and lung failure — most common in cardiac patients" },
      { name: "Veno-Venous (VV) ECMO", description: "Support for isolated severe lung failure" },
      { name: "ECMO as Bridge to Recovery", description: "Support until the heart or lungs recover function" },
      { name: "ECMO as Bridge to Transplant", description: "Support until a donor organ becomes available" },
      { name: "ECMO as Bridge to Decision", description: "Temporary support while evaluating long-term options" },
    ],
    surgicalApproach: [
      "ECMO cannulation can be performed percutaneously (through the skin) or surgically (cut-down approach).",
      "For VA ECMO: Cannulae are placed in a large vein (to drain blood) and a large artery (to return oxygenated blood).",
      "For VV ECMO: Cannulae are placed in one or two large veins for drainage and return.",
      "Cannulation sites include the femoral vessels (groin), internal jugular vein (neck), or directly into the heart for postcardiotomy patients.",
      "The ECMO circuit includes a pump, oxygenator, heat exchanger, and monitoring systems.",
      "Anticoagulation (blood thinners) is carefully managed to prevent clots while minimizing bleeding risk.",
      "The ECMO circuit is continuously monitored by a dedicated perfusion team.",
      "Wearing from ECMO is undertaken when organ function has sufficiently recovered."
    ],
    benefits: [
      "Provides lifesaving support for patients who would otherwise not survive",
      "Allows the heart and lungs to rest and recover",
      "Maintains oxygen delivery to vital organs (brain, kidneys, liver)",
      "Buys time for diagnosis and definitive treatment decisions",
      "Can be initiated rapidly at the bedside in emergency situations",
      "Serves as a bridge to recovery, transplant, or long-term device therapy",
      "Enables complex cardiac repairs that require prolonged recovery time"
    ],
    recovery: [
      "ECMO support duration varies from days to weeks depending on the underlying condition.",
      "Patients are managed in the ICU by a specialized multidisciplinary ECMO team.",
      "Continuous monitoring of anticoagulation, hemodynamics, and end-organ function is essential.",
      "Once the heart or lungs show adequate recovery, wearing from ECMO is performed gradually.",
      "After ECMO decannulation, the cannulation sites are repaired surgically or with manual compression.",
      "Total hospital stay is prolonged — often weeks to months depending on the underlying illness.",
      "Long-term recovery includes cardiac or pulmonary rehabilitation as indicated.",
      "Psychological support is important — ECMO survivorship involves both physical and emotional recovery."
    ],
    whyRoboticMics: "ECMO is a lifesupport technique, not a surgical procedure that would involve robotic or minimally invasive approaches. However, Dr. Nisarga's expertise in advanced cardiac surgery ensures that patients requiring ECMO receive comprehensive care including optimal surgical techniques for cannulation, management of complications, and timely transition to recovery or definitive surgical therapy.",
    stats: [
      { stat: "Days to Weeks", label: "Duration of ECMO Support" },
      { stat: "ICU-Based", label: "Continuous Monitoring Required" },
      { stat: "Bridge", label: "To Recovery or Transplant" },
      { stat: "Multidisciplinary", label: "Specialized Team Required" },
    ]
  },
];
