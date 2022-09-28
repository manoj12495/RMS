package com.app.entities;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

@Entity
@Table(name="payment")

public class Payment {

		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Id
		private int paymentId;
		
		@Transient
		@OneToOne(fetch = FetchType.EAGER, mappedBy = "payment",cascade = CascadeType.ALL, orphanRemoval = true)
		private Orders order;
		
		private double netPaymentAmount;
	    
		@Column(name="paymentDateTime", insertable = false)
		@Temporal(TemporalType.TIMESTAMP)
		private Date paymentDateTime;
		
//		@Temporal(TemporalType.TIME)
//	    //@Column(name ="payment_time",insertable = false)
//		private Date paymentTime;
	    
	    private int paymentStatus;  // 0:unpaid, 1:paid

	    private String paymentType;  // 0:cash, 1:Online, 2:UPI

		public Payment() {
			// TODO Auto-generated constructor stub
		}

				
		public Payment(int paymentId, Orders order, double netPaymentAmount, Date paymentDateTime, int paymentStatus,
				String paymentType) {
			this.paymentId = paymentId;
			this.order = order;
			this.netPaymentAmount = netPaymentAmount;
			this.paymentDateTime = paymentDateTime;
			this.paymentStatus = paymentStatus;
			this.paymentType = paymentType;
		}



		public int getPaymentId() {
			return paymentId;
		}

		public void setPaymentId(int paymentId) {
			this.paymentId = paymentId;
		}

		public Orders getOrder() {
			return order;
		}

		public void setOrder(Orders order) {
			this.order = order;
		}

		public double getNetPaymentAmount() {
			return netPaymentAmount;
		}

		public void setNetPaymentAmount(double netPaymentAmount) {
			this.netPaymentAmount = netPaymentAmount;
		}

		public Date getPaymentDateTime() {
			return paymentDateTime;
		}

		public void setPaymentDateTime(Date paymentDateTime) {
			this.paymentDateTime = paymentDateTime;
		}

		public int getPaymentStatus() {
			return paymentStatus;
		}

		public void setPaymentStatus(int paymentStatus) {
			this.paymentStatus = paymentStatus;
		}

		public String getPaymentType() {
			return paymentType;
		}

		public void setPaymentType(String paymentType) {
			this.paymentType = paymentType;
		}

		@Override
		public String toString() {
			return "Payment [paymentId=" + paymentId + ", order=" + order + ", netPaymentAmount=" + netPaymentAmount
					+ ", paymentDateTime=" + paymentDateTime + ", paymentStatus=" + paymentStatus + ", paymentType="
					+ paymentType + "]";
		}

		
}
