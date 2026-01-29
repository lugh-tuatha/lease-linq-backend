--
-- PostgreSQL database dump
--

\restrict 9Eakc6pDvtnvN4MC6jaE4WEomfrWRdXCPsqDR5bZtjhpdSVvFpa8N51hGkOJJ4a

-- Dumped from database version 17.7 (Debian 17.7-3.pgdg13+1)
-- Dumped by pg_dump version 17.6 (Ubuntu 17.6-1.pgdg24.04+1)

-- Started on 2026-01-30 06:59:34 PST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3444 (class 0 OID 16899)
-- Dependencies: 219
-- Data for Name: Organizations; Type: TABLE DATA; Schema: public; Owner: -
--

--
-- TOC entry 3442 (class 0 OID 16841)
-- Dependencies: 217
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

--
-- TOC entry 3443 (class 0 OID 16877)
-- Dependencies: 218
-- Data for Name: parking_sessions; Type: TABLE DATA; Schema: public; Owner: -
--
INSERT INTO public.parking_sessions (
  id, vehicle_type, vehicle_model, plate_number,
  entered_at, exited_at, parking_credits, duration_minutes,
  parking_state, payment_status, guard_remarks,
  "createdAt", "updatedAt", parking_fee, organization_id,
  discount_type, include_in_bir_report, occurance_date
) VALUES
('1a3bad2a-898c-4c1f-864a-59161f8c4ddf','CAR',NULL,'Nfw7744','2026-01-26 03:00:27.295','2026-01-26 03:50:37.653',NULL,51,'EXITED','PAID',NULL,'2026-01-26 03:00:27.296','2026-01-26 03:50:37.654',25,'9ed47d8e-f82d-4016-a770-fc3c93563762','NONE',false,'2026-01-26');

INSERT INTO public.parking_sessions (
  id, vehicle_type, vehicle_model, plate_number,
  entered_at, exited_at, parking_credits, duration_minutes,
  parking_state, payment_status, guard_remarks,
  "createdAt", "updatedAt", parking_fee, organization_id,
  discount_type, include_in_bir_report, occurance_date
) VALUES
('4f6a44da-12ed-4fd3-b522-27e2eb917256','CAR',NULL,'NLC3166','2026-01-26 05:13:24.827','2026-01-29 00:06:39.042',NULL,4014,'EXITED','PAID',NULL,'2026-01-26 05:13:24.828','2026-01-29 00:06:39.043',1675,'9ed47d8e-f82d-4016-a770-fc3c93563762','NONE',false,'2026-01-26');

INSERT INTO public.parking_sessions (
  id, vehicle_type, vehicle_model, plate_number,
  entered_at, exited_at, parking_credits, duration_minutes,
  parking_state, payment_status, guard_remarks,
  "createdAt", "updatedAt", parking_fee, organization_id,
  discount_type, include_in_bir_report, occurance_date
) VALUES
('faa53171-fd6d-486f-82e6-234bc435b197','CAR',NULL,'Ccj5828','2026-01-26 09:14:06.362','2026-01-26 09:15:22.354',NULL,2,'EXITED','PAID',NULL,'2026-01-26 09:14:06.363','2026-01-26 09:15:22.355',25,'9ed47d8e-f82d-4016-a770-fc3c93563762','NONE',false,'2026-01-26');

INSERT INTO public.parking_sessions (
  id, vehicle_type, vehicle_model, plate_number,
  entered_at, exited_at, parking_credits, duration_minutes,
  parking_state, payment_status, guard_remarks,
  "createdAt", "updatedAt", parking_fee, organization_id,
  discount_type, include_in_bir_report, occurance_date
) VALUES
('f5ddacf8-12c2-4fe6-ba29-f43cfd928a85','MOTORCYCLE',NULL,'T9288x','2026-01-27 01:09:25.78','2026-01-27 03:29:03.879',NULL,140,'EXITED','PAID',NULL,'2026-01-27 01:09:25.781','2026-01-27 03:29:03.88',60,'9ed47d8e-f82d-4016-a770-fc3c93563762','NONE',false,'2026-01-27');

INSERT INTO public.parking_sessions (
  id, vehicle_type, vehicle_model, plate_number,
  entered_at, exited_at, parking_credits, duration_minutes,
  parking_state, payment_status, guard_remarks,
  "createdAt", "updatedAt", parking_fee, organization_id,
  discount_type, include_in_bir_report, occurance_date
) VALUES
('e598ad2e-ddd1-4526-ac08-1417d2914de1','MOTORCYCLE',NULL,'298USZ','2026-01-27 04:54:56.603','2026-01-27 05:52:49.126',NULL,58,'EXITED','PAID',NULL,'2026-01-27 04:54:56.604','2026-01-27 05:52:49.127',20,'9ed47d8e-f82d-4016-a770-fc3c93563762','NONE',false,'2026-01-27');

INSERT INTO public.parking_sessions (
  id, vehicle_type, vehicle_model, plate_number,
  entered_at, exited_at, parking_credits, duration_minutes,
  parking_state, payment_status, guard_remarks,
  "createdAt", "updatedAt", parking_fee, organization_id,
  discount_type, include_in_bir_report, occurance_date
) VALUES
('178a29a9-11a1-47ad-b7ac-ee295c480954','CAR',NULL,'Nkc4236','2026-01-27 07:31:32.709','2026-01-27 07:32:19.258',NULL,1,'EXITED','PAID',NULL,'2026-01-27 07:31:32.709','2026-01-27 07:32:19.259',25,'9ed47d8e-f82d-4016-a770-fc3c93563762','NONE',false,'2026-01-27');

INSERT INTO public.parking_sessions (
  id, vehicle_type, vehicle_model, plate_number,
  entered_at, exited_at, parking_credits, duration_minutes,
  parking_state, payment_status, guard_remarks,
  "createdAt", "updatedAt", parking_fee, organization_id,
  discount_type, include_in_bir_report, occurance_date
) VALUES
('b5a03d53-1d15-4360-b650-d5641d57dfb0','MOTORCYCLE',NULL,'699PMS','2026-01-28 03:19:56.194','2026-01-28 04:14:46',NULL,55,'EXITED','PAID',NULL,'2026-01-28 03:19:56.195','2026-01-28 04:14:46',20,'9ed47d8e-f82d-4016-a770-fc3c93563762','NONE',false,'2026-01-28');

INSERT INTO public.parking_sessions (
  id, vehicle_type, vehicle_model, plate_number,
  entered_at, exited_at, parking_credits, duration_minutes,
  parking_state, payment_status, guard_remarks,
  "createdAt", "updatedAt", parking_fee, organization_id,
  discount_type, include_in_bir_report, occurance_date
) VALUES
('d23a8e9f-dd8d-4372-b0d9-3612678b6529','MOTORCYCLE',NULL,'030101','2026-01-28 04:23:57.026','2026-01-28 04:31:35.333',NULL,8,'EXITED','PAID',NULL,'2026-01-28 04:23:57.027','2026-01-28 04:31:35.334',20,'9ed47d8e-f82d-4016-a770-fc3c93563762','NONE',false,'2026-01-28');

INSERT INTO public.parking_sessions (
  id, vehicle_type, vehicle_model, plate_number,
  entered_at, exited_at, parking_credits, duration_minutes,
  parking_state, payment_status, guard_remarks,
  "createdAt", "updatedAt", parking_fee, organization_id,
  discount_type, include_in_bir_report, occurance_date
) VALUES
('f352bd20-fc7c-481d-a99a-dc464d230a68','CAR',NULL,'NiB6883','2026-01-28 09:46:46.399','2026-01-28 12:07:07.48',NULL,141,'EXITED','PAID',NULL,'2026-01-28 09:46:46.4','2026-01-28 12:07:07.482',75,'9ed47d8e-f82d-4016-a770-fc3c93563762','NONE',false,'2026-01-28');


-- Completed on 2026-01-30 06:59:53 PST

--
-- PostgreSQL database dump complete
--

\unrestrict 9Eakc6pDvtnvN4MC6jaE4WEomfrWRdXCPsqDR5bZtjhpdSVvFpa8N51hGkOJJ4a

