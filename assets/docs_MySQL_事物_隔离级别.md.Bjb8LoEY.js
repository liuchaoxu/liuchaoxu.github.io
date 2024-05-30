import{_ as t,c as a,o as e,a4 as n}from"./chunks/framework.CpNIRa07.js";const u=JSON.parse('{"title":"事务","description":"","frontmatter":{},"headers":[],"relativePath":"docs/MySQL/事物_隔离级别.md","filePath":"docs/MySQL/事物_隔离级别.md","lastUpdated":1717041105000}'),o={name:"docs/MySQL/事物_隔离级别.md"},r=n(`<h1 id="事务" tabindex="-1">事务 <a class="header-anchor" href="#事务" aria-label="Permalink to &quot;事务&quot;">​</a></h1><h2 id="如果需要手动提交事务" tabindex="-1">如果需要手动提交事务 <a class="header-anchor" href="#如果需要手动提交事务" aria-label="Permalink to &quot;如果需要手动提交事务&quot;">​</a></h2><pre><code>	（1）set autocommit = false/0;
		对于整个连接都起作用，整个连接的sql语句都变成手动提交
	（2）start transaction;
		仅仅是对于start transaction; 到 rollback; /commit;之间的语句是手动提交，对于该连接的其他语句还是自动提交
mysql只有innodb引擎才支持事务
</code></pre><h2 id="多线程事务" tabindex="-1">多线程事务 <a class="header-anchor" href="#多线程事务" aria-label="Permalink to &quot;多线程事务&quot;">​</a></h2><pre><code>	问题
		（1）脏读
			例如：T1线程中，访问了一个数据，这个数据是T2线程中修改但还未提交的数据
				比喻
					教师看到了学生答卷还未交卷的答案，在未交卷之前都是可以修改
		（2）不可重复读
			例如：T1线程未结束之前，访问了一个数据，之后又访问这个数据，两次的访问结果不一致，这个数据在T2线程中被修改，并提交了
				比喻
					教师在巡考过程中看到了学生的答卷的答案，之后这个学生交卷，但是它在交卷之前，修改了这个答案，教师在两次看到这个答案是不一样
		（3）幻读
			例如：T1线程对某个表做查询，同样一个查询语句，第一次查询有n行记录，然后又查询一次时，发现有N+M行记录，发现多了或少了M行，因为T2线程增加了M行或删除了M行
		原因：两个或多个线程同时访问同一份数据，就有线程安全问题
	解决的方案
		事务的隔离级别
		如果以上三个问题都允许，那么事务的隔离级别就可以是
			Read uncommitted
		如果要避免脏读，允许后两个，那么事务的隔离级别可以是
			Read committed
		如果要避免脏读和不可重复读，但是允许幻读，那么事务的隔离级别可以是
			Repeatable Read
			特殊mysql在这个级别，也会避免幻读
			mysql默认的事务隔离级别就是这级
		如果要避免以上三个问题，事务的隔离级别是
			Serializable
</code></pre>`,5),s=[r];function c(d,_,i,l,m,h){return e(),a("div",null,s)}const f=t(o,[["render",c]]);export{u as __pageData,f as default};
