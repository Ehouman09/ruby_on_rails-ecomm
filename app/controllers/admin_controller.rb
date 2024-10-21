class AdminController < ApplicationController
  layout 'admin'
  before_action :authenticate_admin!

  def index
    @oders = Order.where(fulfilled: false).order(created: :desc).take(5)
    @quick_stats = {
      sales: Order.where(created_at: Time.now.midnight..Time.now).count,
      revenue: Order.where(created_at: Time.now.midnight..Time.now).sum(:total).round(),
      avg_sale: Order.where(created: Time.now.midnight..Time.now).average(:total).round(),
      per_sale: OrderProduct.joins(:order).where(orders: {created_at: Time.now.midnight..Time.now}).average(:quantity).round()
    }
 
  end

end
